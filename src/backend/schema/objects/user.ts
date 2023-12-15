import { UserRoleEnum } from './userRole';
import { prisma } from '../../../lib/prisma';
import { emailValidator, userIdValidator, userNameValidator } from '../../../util/validators';
import { isAdmin } from '../../util/authorityCheckers';
import { builder } from '../builder';

export const User = builder.prismaNode('User', {
  id: { field: 'id' },
  fields: (t) => ({
    databaseId: t.exposeString('id'),
    name: t.exposeString('name', { nullable: true }),
    userId: t.exposeString('userId', { nullable: true }),
    email: t.exposeString('trueEmail', { nullable: true }),
    image: t.exposeString('image', { nullable: true }),
    role: t.expose('role', { type: UserRoleEnum }),

    createdAt: t.expose('createdAt', { type: 'Date' }),
    updatedAt: t.expose('updatedAt', { type: 'Date' }),
  }),
});

const UserInput = builder.inputType('UserInput', {
  fields: (t) => ({
    userId: t.string({ required: true, validate: { schema: userIdValidator } }),
    name: t.string({ required: true, validate: { schema: userNameValidator } }),
    email: t.string({ required: true, validate: { schema: emailValidator } }),
    image: t.string({ required: false }),
  }),
});

const UpdateUserInput = builder.inputType('UpdateUserInput', {
  fields: (t) => ({
    userId: t.string({ required: false }),
    data: t.field({ type: UserInput, required: true }),
  }),
});

const DeleteUserInput = builder.inputType('DeleteUserInput', {
  fields: (t) => ({
    userId: t.string({ required: true }),
  }),
});

builder.mutationFields((t) => ({
  updateUser: t.prismaField({
    type: User,
    args: {
      input: t.arg({ type: UpdateUserInput, required: true }),
    },
    resolve: (_query, _root, args, ctx, _info) => {
      const targetUserId = args.input?.userId || ctx.currentUserId;
      if (!isAdmin(ctx.currentUserId) && ctx.currentUserId !== targetUserId) {
        throw new Error('権限がありません。');
      }
      return prisma.user.update({
        where: { userId: targetUserId },
        data: {
          userId: args.input.data.userId,
          name: args.input.data.name,
          trueEmail: args.input.data.email,
          image: args.input.data.image,
        },
      });
    },
  }),
  deleteUser: t.prismaField({
    type: User,
    args: {
      input: t.arg({ type: DeleteUserInput, required: true }),
    },
    resolve: (_query, _root, args, ctx, _info) => {
      const targetUserId = args.input?.userId || ctx.currentUserId;
      if (!isAdmin(ctx.currentUserId) && ctx.currentUserId !== targetUserId) {
        throw new Error('権限がありません。');
      }
      return prisma.user.delete({
        where: { userId: targetUserId },
      });
    },
  }),
}));

const GetUserInput = builder.inputType('GetUserInput', {
  fields: (t) => ({
    userId: t.string({ required: false }),
  }),
});

builder.queryFields((t) => ({
  getUser: t.prismaField({
    type: User,
    args: {
      input: t.arg({ type: GetUserInput, required: true }),
    },
    resolve: (query, _root, args, ctx, _info) => {
      return prisma.user.findUniqueOrThrow({
        ...query,
        where: { userId: args.input.userId || ctx.currentUserId },
      });
    },
  }),
}));
