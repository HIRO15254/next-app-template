import {
  AppShell,
  Code,
  Group,
  Title,
  Anchor,
  Button,
  Burger,
} from '@mantine/core';
import {UserAvatar} from 'components/UserAvatar';
import {LARGE_DESKTOP_BREAKPOINT, DESKTOP_BREAKPOINT} from 'const/layoutConfig';
import {LOGIN_URL, PUBLIC_TOP_URL} from 'const/urls';
import Link from 'next/link';
import React from 'react';

import {UserMenu} from './UserMenu';
import classes from './index.module.css';
import packageJson from '../../../../package.json';

import type {BurgerData} from '../useNavbar';
import type {Session} from 'next-auth';

type Props = BurgerData & {
  session?: Session;
};

/**
 * ヘッダー
 */
export const Presentation: React.FC<Props> = props => {
  const {hasBurger, burger, session} = props;
  return (
    <AppShell.Header p="xs">
      <Group justify="space-between" h="100%">
        <Group>
          {hasBurger && (
            <>
              <Burger
                opened={burger.opened.mobile}
                onClick={burger.onClick.mobile}
                size="sm"
                hiddenFrom={DESKTOP_BREAKPOINT}
              />
              <Burger
                opened={burger.opened.desktop}
                onClick={burger.onClick.desktop}
                size="sm"
                visibleFrom={DESKTOP_BREAKPOINT}
                hiddenFrom={LARGE_DESKTOP_BREAKPOINT}
              />
            </>
          )}
          <Anchor component={Link} href={PUBLIC_TOP_URL} underline="never">
            <Title order={3} className={classes.title}>
              {packageJson.name}
            </Title>
          </Anchor>
          <Code>{`v${packageJson.version}`}</Code>
        </Group>
        {session && (
          <UserMenu>
            <UserAvatar user={session.user} size="md" />
          </UserMenu>
        )}
        {!session && (
          <Button component={Link} href={LOGIN_URL}>
            ログイン
          </Button>
        )}
      </Group>
    </AppShell.Header>
  );
};
