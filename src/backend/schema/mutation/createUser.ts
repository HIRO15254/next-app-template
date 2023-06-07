import { builder } from "../builder";
import { prisma } from "../../../lib/prisma"

builder.mutationFields((t) => ({
  createUser: t.prismaField({
    type: 'User',
    args: {
      name: t.arg.string({ required: true }),
    },
    resolve: (_query, _root, args, _ctx, _info) => {
      return prisma.user.create({
        data: {
          name: args.name,
        },
      });
    },
  }),
}));