import React from 'react';
import Link from 'next/link';
import * as motion from 'motion/react-client';

function PostListItem({ post }) {
  return (
    <Link href={`/blog/${post.id}`}>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.3,
          type: 'spring',
          stiffness: 100,
        }}
        className="flex flex-col m-2 p-2 border-2 border-pink-200 shadow-lg rounded-xl bg-purple-700">
        <h2 className="text-3xl my-2 text-black">{post.title}</h2>
        <p className="text-xl text-gray-400">{post.body}</p>
      </motion.div>
    </Link>
  );
}

export default PostListItem;
