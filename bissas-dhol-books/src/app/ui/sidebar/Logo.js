import React from 'react';
import { SparklesIcon } from '@heroicons/react/24/solid';

function Logo() {
  return (
    <div className="flex flex-row items-center text-green-700 leading-none">
      <SparklesIcon className="w-12 h-12 text-purple-700" />
      <p className="text-[30px] ml-1">Bissas</p>
    </div>
  );
}

export default Logo;
