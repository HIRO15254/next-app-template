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
import { Session } from 'next-auth';

interface Props {
  children: React.ReactNode;
  noHeader?: boolean;
  noNavbar?: boolean;
  session?: Session
}

export const MainAppShell = (props: Props ) => {
  const { children, noHeader, noNavbar, session } = props;

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
        !noNavbar ? <MainNavBar opened={opened} /> : undefined
      }
      header={
        !noHeader ? <MainHeader
          opened={opened}
          noBurger={noNavbar}
          session={session}
          onBurgerClick={() => setOpened((o) => !o)}
        /> : undefined
      }
    >
      {children}
    </AppShell>
  );
}