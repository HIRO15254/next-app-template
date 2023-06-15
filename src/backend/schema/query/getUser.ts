import { builder } from '../builder'
import { prisma } from "../../../lib/prisma"
import { User } from '../object/user';

const GetUserInput = builder.inputType("GetUserInput", {
  fields: (t) => ({
    userId: t.string({ required: true }),
  }),
});

builder.queryField('getUser', (t) => t.prismaField({
  type: User,
  args: { input: t.arg({ type: GetUserInput, required: true }) },
  resolve: async (query, _root, args, _ctx, _info) => {
    const ret = prisma.user.findUnique({
      ...query,
      where: { userId: args.input?.userId ?? "" },
    });
    return ret;
  }
}));
