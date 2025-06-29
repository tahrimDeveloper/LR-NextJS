export default async function fetchData() {
  const data = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=10'
  );
  return data.json();
}
