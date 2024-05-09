// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth, {DefaultSession} from 'next-auth';
import 'next-auth/jwt';

declare module 'next-auth' {
  interface Session {
    user: {
      userId: string;
    } & DefaultSession['user'];
    token: string;
  }
  interface User {
    userId: string;
  }
}
