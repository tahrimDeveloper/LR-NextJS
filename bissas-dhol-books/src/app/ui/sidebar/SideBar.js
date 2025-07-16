import React from 'react';
import Link from 'next/link';
import NavLinks from './NavLinks';
import Logo from './Logo';
import { ArrowLeftOnRectangleIcon } from '@heroicons/react/24/solid';

function SideBar() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        href="/store"
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-purple-200 p-4 md:h-30">
        <div className="w-32 md:w-40">
          <Logo />
        </div>
      </Link>

      <div className="flex flex-wrap gap-2 justify-center md:grow flex-row md:justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <form>
          <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md text-black bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-purple-600 md:flex-none md:justify-start md:px-3">
            <ArrowLeftOnRectangleIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}

export default SideBar;
