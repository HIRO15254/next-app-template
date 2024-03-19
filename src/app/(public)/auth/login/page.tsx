import {APPLICATION_TOP_URL} from 'const/urls';
import {LoginForm} from 'features/auth/components/LoginForm';
import {redirect} from 'next/navigation';
import {getServerSession} from 'next-auth';
import React from 'react';

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

  const session = await getServerSession();
  const callbackUrl =
    searchParams.callbackUrl?.toString() ?? APPLICATION_TOP_URL;

  // ログイン済みならコールバック先へリダイレクト
  if (session) {
    redirect(callbackUrl);
  }

  return <LoginForm callbackUrl={callbackUrl} />;
};

export default LoginPage;
