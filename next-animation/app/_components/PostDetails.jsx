import React from 'react';

function PostDetails({ post }) {
  // console.log(post);
  return (
    <>
      <p className="text-2xl m-2 p-4">{post.title}</p>
      <p className="m-1">{post.body}</p>
    </>
  );
}

export default PostDetails;
