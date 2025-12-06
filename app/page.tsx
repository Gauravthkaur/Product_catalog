"use client";
import { useEffect, useState, useMemo } from "react";
import axios from "axios";
import SearchBar from "@/components/SearchBar";
import ProductGrid from "@/components/ProductGrid";
import useDebounceVal from "@/hooks/useDebounce";
import { fuzzyMatch } from "@/utils/fuzzy";
import { Product } from "@/types/products";

function App() {
const [products, setProducts] = useState<Product[]>([]);
const [searchTerm, setSearchTerm] = useState("");
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");

const debouncedSearch = useDebounceVal(searchTerm, 300); // using debounce hook for search input

useEffect(() => {
  const fetchProducts = async () => {  // fetching products from backend API at once so that we can filter on client side
    try {
      const res = await axios.get<Product[]>(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}`
      );
      setProducts(res.data);
    } catch (err) {
      setError("Failed to load products. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  fetchProducts();
}, []);

  const filteredProducts = useMemo(() => { // filtering products based on debounced search term
    if (!debouncedSearch.trim()) return products;
    return products.filter((p) =>
      fuzzyMatch(
        `${p.name} ${p.category} ${p.description}`,
        debouncedSearch
      )
    );
  }, [products, debouncedSearch]);
return (
<main className="min-h-screen bg-slate-50">
  <header className="bg-white border-b shadow-sm">
    <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
          Product Catalog
        </h1>
      </div>
      <div className="w-full sm:w-72">
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
      </div>
    </div>
  </header>

  <section className="mx-auto max-w-6xl px-4 py-6"> 
    {!loading && !error && (
      <p className="mb-4 text-sm text-slate-500">
        Showing{" "}
        <span className="font-medium text-slate-800">
          {filteredProducts.length}
        </span>{" "}
        of{" "}
        <span className="font-medium text-slate-800">
          {products.length}
        </span>{" "}
        products
      </p>
    )}


    {loading ? (
      <div className="flex items-center justify-center py-16">
        <p className="text-sm text-slate-500 animate-pulse">
          Loading products…
        </p>
      </div>
    ) : error ? (
      <div className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
        {error}
      </div>
    ) : filteredProducts.length === 0 ? (
      <div className="flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-slate-200 bg-white py-12">
        <p className="text-sm font-medium text-slate-700">
          No products matched your search.
        </p>
        <p className="text-xs text-slate-500">
          Try changing your keywords or clear the search box.
        </p>
      </div>
    ) : (
      <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
        <ProductGrid products={filteredProducts} />
      </div>
    )}
  </section>
</main>
  );
}

export default App;
