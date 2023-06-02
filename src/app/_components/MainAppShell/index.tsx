"use client";

import { useState } from 'react';
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
} from '@mantine/core';
import { MainHeader } from '../MainHeader';
import { MainNavBar } from '../MainNavBar';

interface Props {
  children: React.ReactNode;
}

export const MainAppShell = (props: Props) => {
  const { children } = props;

  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      navbar={
        <MainNavBar opened={opened} />
      }
      header={
        <MainHeader
          opened={opened}
          onBurgerClick={() => setOpened((o) => !o)}
        />
      }
    >
      {children}
    </AppShell>
  );
}