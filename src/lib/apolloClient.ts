import { ApolloClient, InMemoryCache } from "@apollo/client";

const url = process.env.NEXT_PUBLIC_VERCEL_ENV === "production" ? "https://next-app-template-delta.vercel.app" : 'http://localhost:3000';

export const apolloClient = new ApolloClient({
  uri: `${url}/api/graphql`,
  cache: new InMemoryCache(),
});