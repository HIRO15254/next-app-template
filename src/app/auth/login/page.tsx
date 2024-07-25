import React from 'react';

import {redirect} from 'next/navigation';

import {APPLICATION_TOP_URL} from '~/frontend/const/urls';
import {LoginPage} from '~/frontend/features/auth/pages/LoginPage';
import {getLoginUserData} from '~/frontend/features/auth/utils/getLoginUserData';

interface LoginPageProps {
  searchParams: {[key: string]: string | string[] | undefined};
}

export const metadata = {
  title: 'ログイン',
};

/**
 * ログイン用のページ ログイン時のアクセスは禁止
 */
const Page = async (props: LoginPageProps) => {
  const {searchParams} = props;
  const user = await getLoginUserData();

  const callbackUrl =
    searchParams.callbackUrl?.toString() ?? APPLICATION_TOP_URL;

  if (user) {
    redirect(callbackUrl);
  }

  return <LoginPage callbackUrl={callbackUrl} />;
};

export default Page;
