import {UserRole} from '@prisma/client';

import {prisma} from '../../../lib/prisma';
import {
  emailValidator,
  userIdValidator,
  userNameValidator,
} from '../../../util/validators';
import {builder} from '../../lib/pothos';
import {getAuthUser} from '../util/getAuthUser';

import {UserRoleEnum} from './userRole';

export const User = builder.prismaNode('User', {
  id: {field: 'id'},
  fields: t => ({
    databaseId: t.exposeString('id'),
    name: t.exposeString('name'),
    userId: t.exposeString('userId'),
    email: t.exposeString('trueEmail'),
    image: t.exposeString('image', {nullable: true}),
    role: t.expose('role', {type: UserRoleEnum}),

    createdAt: t.expose('createdAt', {type: 'Date'}),
    updatedAt: t.expose('updatedAt', {type: 'Date'}),
  }),
});

const UserInput = builder.inputType('UserInput', {
  fields: t => ({
    userId: t.string({required: false, validate: {schema: userIdValidator}}),
    name: t.string({required: false, validate: {schema: userNameValidator}}),
    email: t.string({required: false, validate: {schema: emailValidator}}),
    image: t.string({required: false}),
  }),
});

const UpdateUserInput = builder.inputType('UpdateUserInput', {
  fields: t => ({
    userId: t.string({required: false}),
    token: t.string({required: false}),
    data: t.field({type: UserInput, required: true}),
  }),
});

const DeleteUserInput = builder.inputType('DeleteUserInput', {
  fields: t => ({
    userId: t.string({required: true}),
    token: t.string({required: false}),
  }),
});

builder.mutationFields(t => ({
  updateUser: t.prismaField({
    type: User,
    args: {
      input: t.arg({type: UpdateUserInput, required: true}),
    },
    resolve: async (_query, _root, args, ctx) => {
      const authUser = await getAuthUser(ctx, args.input.token);
      const targetUserId = args.input?.userId || authUser.userId;
      if (
        authUser.role !== UserRole.ADMIN &&
        authUser.userId !== targetUserId
      ) {
        throw new Error('権限がありません。');
      }
      return prisma.user.update({
        where: {userId: targetUserId},
        data: {
          userId: args.input.data.userId || undefined,
          name: args.input.data.name || undefined,
          trueEmail: args.input.data.email || undefined,
          image: args.input.data.image,
        },
      });
    },
  }),
  deleteUser: t.prismaField({
    type: User,
    args: {
      input: t.arg({type: DeleteUserInput, required: true}),
    },
    resolve: async (_query, _root, args, ctx) => {
      const authUser = await getAuthUser(ctx, args.input.token);
      const targetUserId = args.input?.userId || ctx.currentUserId;
      if (
        authUser.role !== UserRole.ADMIN &&
        authUser.userId !== targetUserId
      ) {
        throw new Error('権限がありません。');
      }
      return prisma.user.delete({
        where: {userId: targetUserId},
      });
    },
  }),
}));

const GetUserInput = builder.inputType('GetUserInput', {
  fields: t => ({
    userId: t.string({required: false}),
    token: t.string({required: false}),
  }),
});

builder.queryFields(t => ({
  user: t.prismaField({
    type: User,
    args: {
      input: t.arg({
        type: GetUserInput,
        required: true,
      }),
    },
    resolve: async (query, _root, args, ctx) => {
      const authUser = await getAuthUser(ctx, args.input.token);
      const targetUserId = args.input.userId || authUser.userId;
      return prisma.user.findUniqueOrThrow({
        ...query,
        where: {userId: targetUserId},
      });
    },
  }),
}));
