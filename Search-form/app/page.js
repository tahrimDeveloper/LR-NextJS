import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Link className="underline" href="/search">
        Start Product Search
      </Link>
      <Link className="underline" href="/posts/create">
        Create Post
      </Link>
    </>
  );
}
