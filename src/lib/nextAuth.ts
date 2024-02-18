/* eslint-disable no-param-reassign */

import {createRandomID} from 'util/createUserId';

import {PrismaAdapter} from '@next-auth/prisma-adapter';
import {prisma} from 'lib/prisma';
import {GetServerSidePropsContext, NextApiRequest, NextApiResponse} from 'next';
import {getServerSession, NextAuthOptions} from 'next-auth';
import {AdapterUser} from 'next-auth/adapters';
import GoogleProvider from 'next-auth/providers/google';

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

export const authOptions: NextAuthOptions = {
  adapter: prismaAdapter,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
  ],
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
          userId: token.userId ?? '',
        },
      };
    },
  },
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 24 * 30, // 30 days
    updateAge: 60 * 60 * 24, // 24 hours
  },
  useSecureCookies: process.env.NODE_ENV === 'production',
  secret: process.env.NEXTAUTH_SECRET ?? '',
  pages: {
    signIn: '/auth/login',
  },
};

export function auth(
  ...args:
    | [GetServerSidePropsContext['req'], GetServerSidePropsContext['res']]
    | [NextApiRequest, NextApiResponse]
    | []
) {
  return getServerSession(...args, authOptions);
}
