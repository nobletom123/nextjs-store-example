import { prisma } from "../../prisma";

const Mutation = {
  async userCreate(parent, { data: { firstName, lastName, email, password } }) {
    return await prisma.user.create({
      data: { firstName, lastName, email, password },
    });
  },
  async userUpdate(
    parent,
    { data: { id, firstName, lastName, email, password } }
  ) {
    return await prisma.user.update({
      data: { firstName, lastName, email, password },
      where: { id },
    });
  },
  async userDelete(parent, { data: { id } }) {
    return await prisma.user.delete({
      where: { id },
    });
  },
  async productCreate(
    parent,
    { data: { title, description, price, image, rating } }
  ) {
    return await prisma.product.create({
      data: { title, description, price, image, rating },
    });
  },
  async productUpdate(parent, { data: { id, title, description, price } }) {
    return await prisma.product.update({
      data: { title, description, price },
      where: { id },
    });
  },
  async productDelete(parent, { data: { id } }) {
    return await prisma.product.delete({ where: { id } });
  },
  async orderCreate(parent, { data: { id, product, user } }) {
    return await prisma.order.create({
      data: { product: { connect: product }, customer: { connect: user } },
    });
  },
  async orderUpdate(parent, { data: { id } }) {
    return await prisma.order.create({ data: { title, description, price } });
  },
  async orderDelete(parent, { data: { id } }) {
    return await prisma.order.delete({ where: { id } });
  },
  async reviewCreate(parent, { data: { id, user, product, comment, rating } }) {
    return await prisma.review.create({
      data: {
        user: { connect: user },
        product: { connect: product },
        rating,
      },
    });
  },
  async reviewUpdate(parent, { data: { id, comment, rating } }) {
    return await prisma.review.update({
      data: { comment, rating },
      where: { id },
    });
  },
  async reviewDelete(parent, { data: { id } }) {
    return await prisma.review.delete({ where: { id } });
  },
};

export { Mutation };
