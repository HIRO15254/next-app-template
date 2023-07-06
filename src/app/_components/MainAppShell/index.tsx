"use client";

import {
  AppShell,
  Group,
  Paper,
  useMantineTheme,
} from '@mantine/core';
import { Session } from 'next-auth';
import React, { useState } from 'react';

import { MainHeader } from 'app/_components/MainHeader';
import { MainNavBar } from 'app/_components/MainNavBar';


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
      navbarOffsetBreakpoint={noNavbar ? 100000 : "sm"}
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
      <Group position="center" pb="sm">
        <Paper w="100%" maw={800} p="md" shadow='xs'>
          {children}
        </Paper>
      </Group>
    </AppShell>
  );
};