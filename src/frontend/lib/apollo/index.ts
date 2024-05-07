import {ApolloClient, HttpLink, InMemoryCache} from '@apollo/client';

export const apolloClient = new ApolloClient({
  uri: '/api/graphql',
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: '/api/graphql',
  }),
});
