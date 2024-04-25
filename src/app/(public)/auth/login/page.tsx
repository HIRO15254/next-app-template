import React from 'react';

import {redirect} from 'next/navigation';

import {APPLICATION_TOP_URL} from '~/frontend/const/urls';
import {LoginForm} from '~/frontend/features/auth/components/LoginForm';
import {auth} from '~/lib/nextAuth';

interface LoginPageProps {
  searchParams: {[key: string]: string | string[] | undefined};
}

export const metadata = {
  title: 'ログイン',
};

/**
 * ログイン用のページ ログイン時のアクセスは禁止
 */
const LoginPage = async (props: LoginPageProps) => {
  const {searchParams} = props;

  const session = await auth();
  const callbackUrl =
    searchParams.callbackUrl?.toString() ?? APPLICATION_TOP_URL;

  // ログイン済みならコールバック先へリダイレクト
  if (session) {
    redirect(callbackUrl);
  }

  return <LoginForm callbackUrl={callbackUrl} />;
};

export default LoginPage;
