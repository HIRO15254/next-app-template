'use client';

import {
  AppShell, Code, Burger, Group, Title, Anchor,
} from '@mantine/core';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import React from 'react';

import { UserAvatar } from 'components/parts/UserAvatar';
import { SMARTPHONE_BREAKPOINT } from 'config/layoutConfig';
import { APPLICATION_TOP_URL } from 'config/urlConfig';

import classes from './index.module.css';
import packageJson from '../../../../../../package.json';
import { UserMenu } from '../../UserMenu';

interface Props {
  burgerOpened: {
    mobile: boolean;
    desktop: boolean;
  }
  onBurgerClick: {
    mobile: () => void;
    desktop: () => void;
  }
}

/**
 * アプリケーション用AppShellのヘッダー
 */
export const Header: React.FC<Props> = (props) => {
  const {
    burgerOpened,
    onBurgerClick,
  } = props;

  const { data: sessionData } = useSession();

  return (
    <AppShell.Header p="xs">
      <Group justify="space-between" h="100%">
        <Group>
          <Burger
            opened={burgerOpened.mobile}
            onClick={onBurgerClick.mobile}
            size="sm"
            hiddenFrom={SMARTPHONE_BREAKPOINT}
          />
          <Burger
            opened={burgerOpened.desktop}
            onClick={onBurgerClick.desktop}
            size="sm"
            visibleFrom={SMARTPHONE_BREAKPOINT}
            hiddenFrom="xl"
          />
          <Anchor component={Link} href={APPLICATION_TOP_URL} underline="never">
            <Title order={3} className={classes.title}>
              {packageJson.name}
            </Title>
          </Anchor>
          <Code>{`v${packageJson.version}`}</Code>
        </Group>
        <UserMenu>
          <UserAvatar user={sessionData?.user} size="md" />
        </UserMenu>
      </Group>
    </AppShell.Header>
  );
};
