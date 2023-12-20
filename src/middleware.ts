import { NextRequest, NextResponse } from 'next/server';
import { withAuth } from 'next-auth/middleware';

// This function can be marked `async` if using `await` inside
function checkAuth(req: NextRequest) {
  const basicAuth = req.headers.get('authorization');

  if (basicAuth) {
    const auth = basicAuth.split(' ')[1];
    const [user, password] = atob(auth).split(':');

    if (user === process.env.BASIC_AUTH_USER && password === process.env.BASIC_AUTH_PASSWORD) {
      return true;
    }
  }
  return false;
}

export default withAuth(
  (req: NextRequest) => {
    const requestHeaders = new Headers(req.headers);
    if (process.env.VERCEL_ENV === 'preview') {
      if (!checkAuth(req)) {
        return new Response('Auth required', {
          status: 401,
          headers: {
            'WWW-Authenticate': 'Basic realm="Secure Area"',
          },
        });
      }
    }

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  },
);

export const config = {
  matcher: [
    '/(application.*)',
  ],
};
