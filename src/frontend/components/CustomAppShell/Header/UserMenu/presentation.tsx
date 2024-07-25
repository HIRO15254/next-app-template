import React from 'react';

import {Anchor, Menu, UnstyledButton} from '@mantine/core';
import {IconLogout, IconSettings} from '@tabler/icons-react';
import Link from 'next/link';

import {SETTINGS_URL} from '~/frontend/const/urls';

type Props = {
  children: React.ReactNode;
  logout: () => void;
};

export const Presentation: React.FC<Props> = props => {
  const {children, logout} = props;
  return (
    <Menu
      width={260}
      position="bottom-end"
      transitionProps={{transition: 'pop-top-right'}}
      withinPortal
    >
      <Menu.Target>
        <UnstyledButton>{children}</UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Label>アカウント</Menu.Label>
        <Anchor component={Link} href={SETTINGS_URL} underline="never">
          <Menu.Item leftSection={<IconSettings size="0.9rem" stroke={1.5} />}>
            設定
          </Menu.Item>
        </Anchor>
        <Menu.Item
          color="red"
          leftSection={<IconLogout size="0.9rem" stroke={1.5} />}
          onClick={logout}
        >
          ログアウト
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};
