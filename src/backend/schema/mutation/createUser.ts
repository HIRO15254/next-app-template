import { builder } from "../builder";
import { prisma } from "../../../lib/prisma"

const CreateUserInput = builder.inputType("CreateUserInput", {
  fields: (t) => ({
    userId: t.string({ required: true }),
    name: t.string({ required: true }),
  }),
});

builder.mutationFields((t) => ({
  createUser: t.prismaField({
    type: 'User',
    args: {
      input: t.arg({ type: CreateUserInput, required: true }),
    },
    resolve: (_query, _root, args, _ctx, _info) => {
      return prisma.user.create({
        data: {
          userId: args.input.userId,
          name: args.input.name,
        },
      });
    },
  }),
}));