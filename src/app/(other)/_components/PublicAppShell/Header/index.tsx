import {
  AppShell, Code, Group, Title, Anchor, Button,
} from '@mantine/core';
import Link from 'next/link';
import React from 'react';

import { APPLICATION_TOP_URL, LOGIN_URL } from 'config/urlConfig';

import classes from './index.module.css';
import packageJson from '../../../../../../package.json';

/**
 * 共有ページで表示されるヘッダー
 */
export const Header: React.FC = () => (
  <AppShell.Header p="xs">
    <Group justify="space-between" h="100%">
      <Group>
        <Anchor component={Link} href={APPLICATION_TOP_URL} underline="never">
          <Title order={3} className={classes.title}>
            {packageJson.name}
          </Title>
        </Anchor>
        <Code>{`v${packageJson.version}`}</Code>
      </Group>
      <Button component={Link} href={LOGIN_URL}>
        ログイン
      </Button>
    </Group>
  </AppShell.Header>
);
