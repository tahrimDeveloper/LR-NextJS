import PostDetails from '@/app/_components/PostDetails';

async function BlogDetailsPage({ params }) {
  const id = (await params).id;
  const postDetailsResponse = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const postDetailsData = await postDetailsResponse.json();

  return (
    <>
      <PostDetails post={postDetailsData} />
    </>
  );
}

export default BlogDetailsPage;
