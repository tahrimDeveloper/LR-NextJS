'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import fetchData from '@/app/lib/postsData';

function blogs() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await fetchData();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="mx-8 my-1 p-1">
      <h1 className="text-2xl text-center font-bold mb-2">
        This Is blogs Page
      </h1>

      <ul>
        {posts.map(post => (
          <div className="mb-4 p-3 rounded-2xl bg-violet-900" key={post.id}>
            <h2 className="mb-1 text-xl font-bold text-amber-300">
              {post.title}
            </h2>
            <p className="mb-1 text-green-400">{post.body}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default blogs;
