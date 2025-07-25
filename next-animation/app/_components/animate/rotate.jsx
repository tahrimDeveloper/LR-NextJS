// 'use client';
// import { motion } from 'motion/react';

import * as motion from 'motion/react-client';

function RotateDiv() {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 3 }}
      className="w-[200px] h-[200px] bg-green-900 border-2 border-purple-500 rounded-2xl m-2 p-2">
      <h1 className="text-center p-4 text-white">As salamu Alaikum brother</h1>
      {/* i can use any other components here like. <AnyComponent/> */}
    </motion.div>
  );
}

export default RotateDiv;
