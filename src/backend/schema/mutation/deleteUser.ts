import { builder } from "../builder";
import { prisma } from "../../../lib/prisma"

const DeleteUserInput = builder.inputType("DeleteUserInput", {
  fields: (t) => ({
    userId: t.string({ required: true }),
  }),
});

builder.mutationFields((t) => ({
  deleteUser: t.prismaField({
    type: 'User',
    args: {
      input: t.arg({ type: DeleteUserInput, required: true }),
    },
    resolve: (_query, _root, args, _ctx, _info) => {
      return prisma.user.delete({
        where: { userId: args.input?.userId ?? "" },
      });
    },
  }),
}));