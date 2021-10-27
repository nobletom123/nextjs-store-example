import { gql } from "apollo-server-micro";

const typeDefs = gql`
  type Query {
    user: User
    users: [User]
    products: [Product]
    product:Product
    order:Order
    orders:Order
    review: Review
    reviews: [Review]
  }

  type Mutation {
    userAuthenticate(data: UserAuthenticateInput!): TokenResponse
    userCreate(data: UserCreateInput!): User
    userUpdate(data: UserUpdateInput!): User
    userDelete(data: UserDeleteInput!): User
    productCreate(data: ProductCreateInput!): Product
    productUpdate(data: ProductUpdateInput!): Product
    productDelete(data: ProductDeleteInput!): Product
    orderCreate(data: OrderCreateInput!): Order
    orderUpdate(data: OrderUpdateInput!): Order
    orderDelete(data: OrderDeleteInput!): Order
    reviewCreate(data: ReviewCreateInput!): Review
    reviewUpdate(data: ReviewUpdateInput!): Review
    reviewDelete(data: ReviewDeleteInput!): Review
  }

  type User {
    id: String
    firstName: String
    lastName: String
    email: String
  }

  input UserCreateInput! {
    firstName: String
    lastName: String
    email: String
  }

  input UserUpdateInput {
    id: String
    firstName: String
    lastName: String
    email: String
}

input UserDeleteInput {
    id: ID!
}

  type Product {
    id: String
    title: String
    description: String
    rating: Number
    price: Number
    }

    input ProductCreateInput! {
        title: String
    description: String
    rating: Number
    price: Number
  }

  input ProductUpdateInput {
    id: String
    title: String
    description: String
    rating: Number
    price: Number

}

input ProductDeleteInput {
    id: ID!
}

  type Order {
    id: String
    user: User
    product: Product
    status: String
  }

  input OrderCreateInput! {
    user: String
    product: String
  }

  input OrderUpdateInput {
    id: String
    title: String
    description: String
    rating: Number
    price: Number
 }

input OrderDeleteInput {
    id: ID!
}

  type Review {
    id: String
    rating: Number
    comment: String
    user: User
    product: Product
  }

  input ReviewCreateInput! {
    rating: Number
    comment: String
    user: String
    product: String
  }

  input ReviewUpdateInput {
    id: String
    rating: Number
    comment: String
 }

input ReviewDeleteInput {
    id: ID!
}

`;

export { typeDefs };
