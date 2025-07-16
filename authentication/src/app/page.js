import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center p-8">
      <Link href="/products" className="text-3xl underline text-amber-300">
        All Products
      </Link>
    </div>
  );
}
