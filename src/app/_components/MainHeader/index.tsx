'use client';

import {
  Code, Header, MediaQuery, Burger, useMantineTheme, Group, Title, Anchor,
} from '@mantine/core';
import React from 'react';

import { UserButton } from 'app/_components/UserButton';

import type { Session } from 'next-auth';

interface Props {
  opened: boolean;
  onBurgerClick: () => void;
  noBurger?: boolean;
  session?: Session;
}

export const MainHeader = (props: Props) => {
  const {
    opened,
    onBurgerClick,
    session,
    noBurger,
  } = props;
  const theme = useMantineTheme();

  return (
    <Header height={70} p="md">
      <Group position="apart">
        <Group position="apart">
          {!noBurger && (
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={onBurgerClick}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
          )}
          <Anchor href="/" unstyled>
            <Title order={3}>App Name</Title>
          </Anchor>
          <Code sx={{ fontWeight: 700 }}>v0.1.0</Code>
        </Group>
        <UserButton user={session?.user} />
      </Group>
    </Header>
  );
};
