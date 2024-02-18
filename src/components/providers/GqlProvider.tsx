'use client';

import {ApolloProvider} from '@apollo/client';
import {apolloClient} from 'lib/apolloClient';
import React from 'react';

export const GqlProvider = ({children}: {children: React.ReactNode}) => (
  <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
);
