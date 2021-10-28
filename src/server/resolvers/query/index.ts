import { prisma } from "../../prisma";

const Query = {
  async user(parent, { data: { id } }) {
    return await prisma.user.findUnique({ where: { id } });
  },
  async users() {
    return await prisma.user.findMany();
  },
  async product(parent, { data: { id } }) {
    return await prisma.product.findUnique({ where: { id } });
  },
  async products() {
    return await prisma.product.findMany();
  },
  async order(parent, { data: { id } }) {
    return await prisma.order.findUnique({ where: { id } });
  },
  async orders() {
    return await prisma.order.findMany();
  },
  async review(parent, { data: { id } }) {
    return await prisma.review.findUnique({ where: { id } });
  },
  async reviews() {
    return await prisma.review.findMany();
  },
};

export { Query };
