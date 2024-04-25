/* eslint-disable no-param-reassign */

import {createRandomID} from 'util/createRandomId';

import {PrismaAdapter} from '@next-auth/prisma-adapter';
import NextAuth from 'next-auth';
import {AdapterUser} from 'next-auth/adapters';
import Google from 'next-auth/providers/google';

import {prisma} from '../prisma';

const prismaAdapter = {
  ...PrismaAdapter(prisma),
  getUserByEmail: () => null,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  createUser: async (data: any) => {
    const user = await prisma.user.create({
      data: {
        ...data,
        trueEmail: data.email,
        email: createRandomID(12),
        userId: createRandomID(8),
      },
    });
    return user as AdapterUser;
  },
};

export const {auth, handlers, signIn, signOut} = NextAuth({
  adapter: prismaAdapter,
  providers: [Google],
  callbacks: {
    async jwt({token, user, trigger}) {
      if (user) {
        token.userId = user.userId;
      }
      if (trigger === 'update') {
        const newUser = await prisma.user.findUnique({
          where: {
            email: token.email ?? '',
          },
        });
        if (newUser) {
          token.picture = newUser?.image;
          token.userId = newUser?.userId;
          token.name = newUser?.name;
        }
      }
      return token;
    },
    session({session, token}) {
      return {
        ...session,
        user: {
          ...session.user,
          userId: token.userId,
        },
      };
    },
  },
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 24 * 30, // 30 days
    updateAge: 60 * 60 * 24, // 24 hours
  },
});
