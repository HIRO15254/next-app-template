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
  noHeader?: boolean;
  noNavbar?: boolean;
}

export const MainAppShell = (props: Props ) => {
  const { children, noHeader, noNavbar } = props;

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
          onBurgerClick={() => setOpened((o) => !o)}
        /> : undefined
      }
    >
      {children}
    </AppShell>
  );
}