import PostListItem from './PostListItem';

async function PostList() {
  const postResponse = await fetch(
    'https://jsonplaceholder.typicode.com/posts'
  );
  const posts = await postResponse.json();

  return posts.map(post => <PostListItem key={post.id} post={post} />);
}

export default PostList;
