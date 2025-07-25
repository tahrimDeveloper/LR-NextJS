import { getAllProducts } from '../../data/products';
import Link from 'next/link';

const ProductList = () => {
  const products = getAllProducts();
  return (
    <div className="flex flex-col justify-center items-center p-8">
      {products.map(product => (
        <>
          <div className="text-2xl border border-amber-300 p-5">
            <p>
              {product.image} - {product.name}
            </p>
          </div>
          <Link key={product.id} href={`/products/${product.id}`}>
            <button className="bg-violet-900 p-2 rounded-md m-2 text-center mb-6">
              Details {product.image}
            </button>
          </Link>
        </>
      ))}
    </div>
  );
};

export default ProductList;
