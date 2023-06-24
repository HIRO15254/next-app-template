import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      userId: string;
      isDarkMode: boolean;
      name: string
      email: string
      image: string
    }
  } 
}
