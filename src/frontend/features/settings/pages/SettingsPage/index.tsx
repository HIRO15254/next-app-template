import React from 'react';

import {getLoginUserData} from '~/frontend/features/auth/utils/getLoginUserData';

import {SettingsPagePresentation} from './presentation';

/**
 * 設定ページ
 */
export const SettingsPage: React.FC = async () => {
  const loginUserData = await getLoginUserData();
  if (!loginUserData) {
    throw new Error('ログイン情報が取得できませんでした');
  }

  return <SettingsPagePresentation userData={loginUserData} />;
};
