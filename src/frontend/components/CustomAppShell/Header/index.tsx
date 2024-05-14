import React from 'react';

import {
  AppShell,
  Code,
  Group,
  Title,
  Anchor,
  Button,
  Burger,
} from '@mantine/core';
import Link from 'next/link';

import {UserAvatar} from '~/frontend/components/UserAvatar';
import {
  LARGE_DESKTOP_BREAKPOINT,
  DESKTOP_BREAKPOINT,
} from '~/frontend/const/layoutConfig';
import {LOGIN_URL, PUBLIC_TOP_URL} from '~/frontend/const/urls';
import {UserData} from '~/gql';

import packageJson from '../../../../../package.json';

import {UserMenu} from './UserMenu';
import classes from './index.module.css';

import type {BurgerData} from '../useNavbar';

type Props = BurgerData & {
  user?: UserData;
};

/**
 * ヘッダー
 */
export const Header: React.FC<Props> = props => {
  const {hasBurger, burger, user} = props;
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
        {user && (
          <UserMenu>
            <UserAvatar
              user={{
                name: user.name,
                image: user.image,
              }}
            />
          </UserMenu>
        )}
        {!user && (
          <Button component={Link} href={LOGIN_URL}>
            ログイン
          </Button>
        )}
      </Group>
    </AppShell.Header>
  );
};
