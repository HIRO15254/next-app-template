import {ApolloServer} from '@apollo/server';

import {Context} from '~/backend/context';
import {schema} from '~/backend/schema';

export const server = new ApolloServer<Context>({
  schema,
  introspection: true,
});
