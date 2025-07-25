import { getProducts } from '../data/product';

export function getSearchResults(query) {
  const products = getProducts();
  // console.log(products);
  return query
    ? products.filter(product =>
        product?.title.toLowerCase().includes(query.toLowerCase())
      )
    : products;
}
