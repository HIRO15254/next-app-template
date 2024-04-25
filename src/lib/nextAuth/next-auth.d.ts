// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth, {DefaultSession} from 'next-auth';
import 'next-auth/jwt';

declare module 'next-auth' {
  interface Session {
    user: {
      userId: string;
    } & DefaultSession['user'];
  }
  interface User {
    userId: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    /** OpenID ID Token */
    userId: string;
  }
}
