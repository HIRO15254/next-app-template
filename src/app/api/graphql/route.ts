import { startServerAndCreateNextHandler } from '@as-integrations/next';

import { server } from '../../../backend/lib/apollo';
import { createContext } from '../../../backend/lib/context';

const handler = startServerAndCreateNextHandler(
  server,
  {
    context: createContext,
  },
);

export async function GET(request: Request) {
  const res = await handler(request);
  if (process.env.NODE_ENV === 'development') {
    res.headers.set('Access-Control-Allow-Origin', '*');
    res.headers.set('Access-Control-Allow-Headers', 'Content-Type');
  }
  return res;
}

export async function POST(request: Request) {
  const res = await handler(request);
  if (process.env.NODE_ENV === 'development') {
    res.headers.set('Access-Control-Allow-Origin', '*');
    res.headers.set('Access-Control-Allow-Headers', 'Content-Type');
  }
  return res;
}
