'use client';

import {AppShell} from '@mantine/core';
import React from 'react';

import {Header} from './Header';

interface Props {
  children: React.ReactNode;
}

/**
 * アプリケーション内のページで表示されるコンポーネント
 */
export const PublicAppShell: React.FC<Props> = props => {
  const {children} = props;

  return (
    <AppShell
      header={{
        height: 60,
      }}
      padding={{base: 10, sm: 15}}
    >
      <Header />
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};
