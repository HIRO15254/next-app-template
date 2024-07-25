import React from 'react';

import {getLoginUserData} from '~/frontend/features/auth/utils/getLoginUserData';

import {AvatarSettingsForm} from '../../components/AvatarSettingsForm';

/**
 * 設定ページ
 */
export const AvatarSettingsPage: React.FC = async () => {
  const loginUserData = await getLoginUserData();
  if (!loginUserData) {
    throw new Error('ログイン情報が取得できませんでした');
  }

  return <AvatarSettingsForm userData={loginUserData} />;
};
