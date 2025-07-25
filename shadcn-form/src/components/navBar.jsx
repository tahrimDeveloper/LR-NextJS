import React from 'react';
import { ModeToggle } from './theme-switcher';

function NavBar() {
  return (
    <div className="p-1 flex justify-between border-b">
      <h1 className="text-2xl">Tahrim the Developer</h1>
      <ModeToggle />
    </div>
  );
}

export default NavBar;
