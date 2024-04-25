import React from 'react';

import {ButtonProps} from '@mantine/core';
import {BuiltInProviderType} from 'next-auth/providers';
import {LiteralUnion} from 'next-auth/react';

import {signIn} from '~/lib/nextAuth';

import {Presentation} from './presentation';

interface Props extends Omit<ButtonProps, 'onClick'> {
  provider: LiteralUnion<BuiltInProviderType>;
  callbackUrl?: string;
}

/**
 * プロバイダーを指定してログインを行うボタン
 * @param props mantineのButtonPropsを継承 + provider: プロバイダー名 + callback: コールバックURL
 */
export const LoginButton: React.FC<Props> = props => {
  const {provider, callbackUrl, ...rest} = props;

  const handleLogin = async () => {
    'use server';

    await signIn(provider, {callbackUrl});
  };

  return (
    <form action={handleLogin}>
      <Presentation provider={provider} {...rest} />
    </form>
  );
};
