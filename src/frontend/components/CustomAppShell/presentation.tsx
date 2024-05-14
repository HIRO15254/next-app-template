'use client';

import React from 'react';

import {AppShell} from '@mantine/core';

import {Header} from './Header';
import {Navbar} from './Navbar';
import {useNavbar} from './useNavbar';

import type {User} from '@supabase/auth-js';

interface Props {
  children: React.ReactNode;
  userData?: User;
}

/**
 * 全ページのコンテンツを囲むシェル
 */
export const Presentation: React.FC<Props> = props => {
  const {children, userData} = props;

  const {navbarProps, burgerData, closeMobile} = useNavbar({
    active: !!userData,
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
      <Header user={userData} {...burgerData} />
      <Navbar onClick={closeMobile} />
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};
