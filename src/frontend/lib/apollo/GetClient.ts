import {ApolloClient, createHttpLink, InMemoryCache} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import {registerApolloClient} from '@apollo/experimental-nextjs-app-support/rsc';

import {createClient} from '~/frontend/lib/supabase/server';

const authLink = setContext(async (_, {headers}) => {
  const supabase = createClient();
  const token = (await supabase.auth.getSession()).data.session?.access_token;

  return {
    headers: {
      ...headers,
      apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      Authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const httpLink = createHttpLink({
  uri: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/graphql/v1`,
});

export const {getClient} = registerApolloClient(
  () =>
    new ApolloClient({
      cache: new InMemoryCache(),
      link: authLink.concat(httpLink),
    })
);
