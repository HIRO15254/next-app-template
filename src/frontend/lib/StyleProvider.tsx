'use client';

import React from 'react';

import {MantineProvider} from '@mantine/core';
import {Notifications} from '@mantine/notifications';

import {theme} from '~/frontend/style/theme';

type Props = {
  children: React.ReactNode;
};

export const StyleProvider = (props: Props) => {
  const {children} = props;

  return (
    <MantineProvider theme={theme}>
      <Notifications />
      {children}
    </MantineProvider>
  );
};
