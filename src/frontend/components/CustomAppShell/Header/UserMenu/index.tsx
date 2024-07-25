'use client';

import React from 'react';

import {useRouter} from 'next/navigation';

import {useLogout} from '~/frontend/features/auth/hooks/useLogout';
import {
  errorNotification,
  successNotification,
} from '~/frontend/util/notifications';

import {Presentation} from './presentation';

interface Props {
  children: React.ReactNode;
}

/**
 * 画面の右上に表示されるユーザー情報表示とそこからのドロップダウンメニュー
 */
export const UserMenu: React.FC<Props> = props => {
  const {children} = props;
  const router = useRouter();

  const [logout] = useLogout();

  const handleLogout = async () => {
    try {
      await logout();
      successNotification('ログアウトしました。');
      router.refresh();
    } catch (error) {
      if (error instanceof Error) {
        errorNotification(error);
      }
    }
  };

  return <Presentation logout={handleLogout}>{children}</Presentation>;
};
