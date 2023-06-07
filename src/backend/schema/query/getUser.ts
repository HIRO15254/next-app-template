import { builder } from '../builder'
import { prisma } from "../../../lib/prisma"

builder.queryFields((t) => ({
  getUser: t.prismaField({
    type: 'User',
    args: {
      userId: t.arg.string({ required: true }),
    },
    resolve: (_query, _root, args, _ctx, _info) => {
      return prisma.user.findUniqueOrThrow({
        where: {
          userId: args.userId,
        },
      })
    },
  }),
}))