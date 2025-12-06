import type { Product } from "@/types/products";
interface ProductCardProps {
    product: Product;
}

function ProductCard({ product }: ProductCardProps) {
    return (
       <article className="flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
      <div className="h-40 bg-slate-100">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="h-full w-full object-contain"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-3 text-sm">
        <h2 className="text-base font-semibold">{product.name}</h2>
        <p className="text-xs text-slate-500">{product.category}</p>
        <p className="line-clamp-2 text-xs text-slate-600">
          {product.description}
        </p>
        <div className="mt-auto flex items-center justify-between text-sm">
          <span className="font-bold">₹{product.price}</span>
        
        </div>
      </div>
    </article>
  );
}
 export default ProductCard;