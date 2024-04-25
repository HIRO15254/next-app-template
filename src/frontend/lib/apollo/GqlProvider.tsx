'use client';

import React from 'react';

import {ApolloProvider} from '@apollo/client';

import {apolloClient} from './index';

export const GqlProvider = ({children}: {children: React.ReactNode}) => (
  <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
);
