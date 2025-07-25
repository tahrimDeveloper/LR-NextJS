import React from 'react';

import Link from 'next/link';

function NavBar() {
  return (
    <div className="flex gap-2">
      <Link className="underline p-2 text-center" href="/">
        Home
      </Link>
      <Link className="underline p-2 text-center" href="/blog">
        Blog
      </Link>
      <Link className="underline p-2 text-center" href="/about">
        About
      </Link>
    </div>
  );
}

export default NavBar;
