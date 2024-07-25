import React from 'react';

import {getLoginUserData} from '~/frontend/features/auth/utils/getLoginUserData';

import {UserSettingsForm} from '../../components/UserSettingsForm';

/**
 * 設定ページ
 */
export const UserSettingsPage: React.FC = async () => {
  const loginUserData = await getLoginUserData();
  if (!loginUserData) {
    throw new Error('ログイン情報が取得できませんでした');
  }

  return <UserSettingsForm userData={loginUserData} />;
};
