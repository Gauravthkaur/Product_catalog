import {Product} from '@/types/products';
import ProductCard from './ProductsCard';

interface ProductsProps {
    products: Product[];
}

export function ProductGrid({ products }: ProductsProps) {
    return(
        <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3'>
            {products.map((product) =>(
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}

export default ProductGrid;