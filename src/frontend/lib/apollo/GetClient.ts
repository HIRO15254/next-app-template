import {ApolloClient, HttpLink, InMemoryCache} from '@apollo/client';
import {registerApolloClient} from '@apollo/experimental-nextjs-app-support/rsc';

export const {getClient} = registerApolloClient(() => {
  let uri = 'http://localhost:3000/api/graphql';
  if (process.env.VERCEL_URL) {
    uri = `https://${process.env.VERCEL_URL}/api/graphql`;
  }
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri,
      fetchOptions: {cache: 'no-store'},
    }),
  });
});
