'use client';

import { useState } from 'react';

function Copy({ text }) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(text);
    setCopied(true);
  }

  return (
    <>
      {copied ? (
        <strong className="text-xs hover:bg-purple-800 p-1 rounded bg-green-700">
          Copied
        </strong>
      ) : (
        <a className="cursor-pointer" onClick={handleCopy}>
          <strong className="text-xs bg-green-700 rounded-2xl hover:bg-purple-700 p-1 ">
            Copy Text
          </strong>
        </a>
      )}
    </>
  );
}

export default Copy;
