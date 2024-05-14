'use client';

import React from 'react';

import {Menu, Anchor, UnstyledButton} from '@mantine/core';
import {IconLogout, IconSettings} from '@tabler/icons-react';
import Link from 'next/link';
import {useRouter} from 'next/navigation';

import {SETTINGS_URL} from '~/frontend/const/urls';
import {createClient} from '~/frontend/lib/supabase/client';

interface Props {
  children: React.ReactNode;
}

/**
 * 画面の右上に表示されるユーザー情報表示とそこからのドロップダウンメニュー
 */
export const UserMenu: React.FC<Props> = props => {
  const {children} = props;
  const supabase = createClient();
  const router = useRouter();

  const logout = async () => {
    const {error} = await supabase.auth.signOut();
    if (!error) {
      router.refresh();
    }
  };

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
