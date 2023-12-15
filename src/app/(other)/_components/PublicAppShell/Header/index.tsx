import {
  AppShell, Code, Group, Title, Anchor, Button,
} from '@mantine/core';
import Link from 'next/link';
import React from 'react';

import { PUBLIC_TOP_URL } from 'config/urlConfig';

import packageJson from '../../../../../../package.json';

/**
 * 共有ページで表示されるヘッダー
 */
export const Header: React.FC = () => (
  <AppShell.Header p="xs">
    <Group justify="space-between" h="100%">
      <Group>
        <Anchor href={PUBLIC_TOP_URL}>
          <Title order={3}>{packageJson.name}</Title>
        </Anchor>
        <Code>{`v${packageJson.version}`}</Code>
      </Group>
      <Button component={Link} href="/auth/login">
        ログイン
      </Button>
    </Group>
  </AppShell.Header>
);
