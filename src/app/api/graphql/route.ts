import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { server } from "../../../backend/lib/apollo"

const handler =  startServerAndCreateNextHandler(server);

export async function GET(request: Request) {
  return handler(request)
}

export async function POST(request: Request) {
  return handler(request)
}