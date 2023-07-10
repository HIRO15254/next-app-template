'use client';

import { ButtonProps } from '@mantine/core';
import { signIn } from 'next-auth/react';
import React from 'react';

import GoogleLoginButton from 'app/(other)/auth/login/_components/GoogleLoginButton';

interface Props extends ButtonProps {
  provider: 'google',
  callback?: string;
}

export const LoginButton = (props: Props) => {
  const { provider, callback, ...rest } = props;

  const handleLogin = () => {
    signIn(provider, { callbackUrl: callback });
  };

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {provider === 'google' && (
        <GoogleLoginButton onClick={handleLogin} {...rest} />
      )}
    </>
  );
};
