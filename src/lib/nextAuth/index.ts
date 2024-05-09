/* eslint-disable no-param-reassign */

import {createRandomID} from 'util/createRandomId';

import {PrismaAdapter} from '@next-auth/prisma-adapter';
import NextAuth from 'next-auth';
import {AdapterUser} from 'next-auth/adapters';
import Google from 'next-auth/providers/google';

import {prisma} from '../prisma';

const prismaAdapter = {
  // @ts-expect-error due to prisma adapter type error
  // TODO: Fix type error (because of prisma Edge)
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
    async session({session, user}) {
      const userData = await prisma.user.findUnique({
        where: {email: user.email},
      });

      return {
        ...session,
        token: session.sessionToken,
        user: {
          ...session.user,
          userId: userData?.userId || '',
        },
      };
    },
  },
  session: {
    strategy: 'database',
    maxAge: 60 * 60 * 24 * 30, // 30 days
    updateAge: 60 * 60 * 24, // 24 hours
  },
});
