export type ProductType = {
  id: string;
  image: string;
  title: string;
  description: string;
  rating: number;
  price: number;
};
export enum ProductOrderByENUM {
  Price = "price",
  Rating = "rating",
}
