'use client';

import React from 'react';

import {AppShell} from '@mantine/core';

import {UserData} from '~/gql';

import {Header} from './Header';
import {Navbar} from './Navbar';
import {useNavbar} from './useNavbar';

interface Props {
  children: React.ReactNode;
  userData?: UserData;
}

/**
 * 全ページのコンテンツを囲むシェル
 */
export const CustomAppShell: React.FC<Props> = props => {
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
