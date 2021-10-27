const resolvers = {
  Query: {
    user() {},
    users(parent, args, context) {
      return [{ name: "Nextjs" }];
    },
    products() {},
    product() {},
    order() {},
    orders() {},
  },
  Mutation: {
    userCreate() {},
    userUpdate() {},
    userDelete() {},
    productCreate() {},
    productUpdate() {},
    productDelete() {},
    orderCreate() {},
    orderUpdate() {},
    orderDelete() {},
    reviewCreate() {},
    reviewUpdate() {},
    reviewDelete() {},
  },
};

export { resolvers };
