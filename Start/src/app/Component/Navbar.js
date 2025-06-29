import Link from 'next/link';
import React from 'react';

function Navbar() {
  return (
    <nav className="bg-teal-500 text-black font-bold">
      <ul className="flex mb-2 justify-around">
        <li className="p-1 rounded hover:bg-violet-500">
          <Link href="/">Home</Link>
        </li>
        <li className="p-1 rounded hover:bg-violet-500">
          <Link href="./About">About</Link>
        </li>
        <li className="p-1 rounded hover:bg-violet-500">
          <Link href="./blogs">Blogs</Link>
        </li>
        <li className="p-1 rounded hover:bg-violet-500">
          <Link href="./contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
