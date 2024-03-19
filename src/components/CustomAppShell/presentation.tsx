'use client';

import {AppShell} from '@mantine/core';
import React from 'react';

import {Header} from './Header';
import {Navbar} from './Navbar';
import {useNavbar} from './useNavbar';

import type {Session} from 'next-auth';

interface Props {
  hasNavbar?: boolean;
  children: React.ReactNode;
  sessionData?: Session;
}

/**
 * 全ページのコンテンツを囲むシェル
 */
export const Presentation: React.FC<Props> = props => {
  const {children, hasNavbar, sessionData} = props;
  const {navbarProps, burgerData, closeMobile} = useNavbar({
    active: hasNavbar || false,
  });

  return (
    <AppShell
      header={{
        height: 60,
      }}
      navbar={{
        width: 250,
        ...navbarProps,
      }}
      padding={{base: 10, sm: 15}}
    >
      <Header session={sessionData} {...burgerData} />
      <Navbar onClick={closeMobile} />
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};
