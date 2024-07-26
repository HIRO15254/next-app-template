import {type NextRequest} from 'next/server';

import {updateSession} from '~/frontend/lib/supabase/middleware';

export async function middleware(request: NextRequest) {
  const ret = await updateSession(request);
  return ret;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/application/:path*',
  ],
};
