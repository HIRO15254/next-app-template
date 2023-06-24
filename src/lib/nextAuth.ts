import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { AuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

import { prisma } from 'lib/prisma';
import { createUserID } from 'util/createUserId';

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
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
      return newsession;
    }
  },
  events: {
    async createUser({ user }) { 
      const userId = createUserID(8);
      await prisma.user.update({
        where: {
          email: user.email ?? '',
        },
        data: {
          userId,
          name: user.name ?? `user-${userId}`,
        }
      });
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