import {startServerAndCreateNextHandler} from '@as-integrations/next';

import {createContext} from '~/backend/context';
import {server} from '~/backend/lib/apollo';

const handler = startServerAndCreateNextHandler(server, {
  context: createContext,
});

export async function GET(request: Request) {
  return handler(request);
}

export async function POST(request: Request) {
  return handler(request);
}
