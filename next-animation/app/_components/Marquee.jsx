import React from 'react';

function Marquee() {
  return (
    <div className="w-full p-4 bg-black text-white font-sans">
      <div className="marquee">
        <span className="marquee-text">
          This moving text created by Tahrim.
        </span>
      </div>
    </div>
  );
}

export default Marquee;
