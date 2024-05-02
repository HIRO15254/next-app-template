import {NextResponse} from 'next/server';

import {auth} from '~/lib/nextAuth';

// eslint-disable-next-line consistent-return
export default auth(req => {
  if (!req.auth) {
    return NextResponse.redirect(
      // eslint-disable-next-line node/no-unsupported-features/node-builtins
      new URL(`/auth/login?redirect=${encodeURIComponent(req.url)}`, req.url)
    );
  }
});
export const config = {
  matcher: ['/(application.*)'],
};
