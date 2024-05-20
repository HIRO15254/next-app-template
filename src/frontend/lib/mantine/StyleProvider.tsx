'use client';

import React from 'react';

import {MantineProvider} from '@mantine/core';
import {Notifications} from '@mantine/notifications';

import {theme} from '~/frontend/lib/mantine/theme';

type Props = {
  children: React.ReactNode;
};

/**
 * Mantineのスタイルを提供するプロバイダー（全体のレイアウトをラップする）
 */
export const StyleProvider = (props: Props) => {
  const {children} = props;

  return (
    <MantineProvider theme={theme}>
      <Notifications />
      {children}
    </MantineProvider>
  );
};
