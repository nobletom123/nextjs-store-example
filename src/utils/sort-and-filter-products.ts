import { ProductType, ProductOrderByENUM } from "../types/product";

export const sortAndFilterProducts = (
  products: ProductType[] = [],
  [minPrice, maxPrice]: [number, number],
  ratingAndUp: number,
  orderBy: ProductOrderByENUM
) => {
  const sortedProducts = products.sort(
    ({ [orderBy]: orderByOne }, { [orderBy]: orderByTwo }) =>
      orderByTwo - orderByOne
  );

  return sortedProducts.filter(({ rating, price }) => {
    const ratingFilter = rating >= ratingAndUp;
    const minPriceFilter = price >= minPrice;
    const maxPriceFilter = price <= maxPrice;
    return ratingFilter && minPriceFilter && maxPriceFilter;
  });
};
