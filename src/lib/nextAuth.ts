import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { AuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

import { prisma } from 'lib/prisma';
import { createUserID } from 'util/createUserId';
import { AdapterUser } from 'next-auth/adapters';

const prismaAdapter = {
  ...PrismaAdapter(prisma),
  getUserByEmail: () => null,
  createUser: async (data: any) => {
    const user = await prisma.user.create({ 
      data: { 
        ...data,
        trueEmail: data.email,
        email:createUserID(12), 
        userId: createUserID(8) 
      } 
    });
    return user as AdapterUser;
  },
};

export const authOptions: AuthOptions = {
  adapter: prismaAdapter,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
  ],
  callbacks: {
    async session({ session }) {
      const newsession = { ...session };
      const userData = await prisma.user.findUnique({
        where: {
          email: session.user.email ?? '',
        },
      });
      newsession.user.userId = userData?.userId ?? '';
      newsession.user.isDarkMode = userData?.isDarkMode ?? false;
      newsession.user.email = userData?.email ?? '';
      return newsession;
    }
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