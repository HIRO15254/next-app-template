'use client';

import { Button, ButtonProps } from '@mantine/core';
import { signIn } from 'next-auth/react';
import React from 'react';

import GoogleIcon from '../GoogleIcon';

interface LoginButtonProps extends ButtonProps {
  provider: 'google',
  callbackUrl?: string;
}

/**
 * プロバイダーを指定してログインを行うボタン
 * @param props mantineのButtonPropsを継承 + provider: プロバイダー名 + callback: コールバックURL
 */
export const LoginButton: React.FC<LoginButtonProps> = (props) => {
  const { provider, callbackUrl, ...rest } = props;

  const handleLogin = () => {
    return signIn(provider, { callbackUrl });
  };

  if (provider === 'google') {
    return (
      <Button
        leftSection={<GoogleIcon />}
        onClick={handleLogin}
        variant="default"
        color="gray"
        {...rest}
      />
    );
  }
  return null;
};
