'use client';

import {ButtonProps} from '@mantine/core';
import {BuiltInProviderType} from 'next-auth/providers';
import {LiteralUnion, signIn} from 'next-auth/react';
import React from 'react';

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

  const handleLogin = (provider: LiteralUnion<BuiltInProviderType>) => {
    return signIn(provider, {callbackUrl});
  };

  return <Presentation provider={provider} onClick={handleLogin} {...rest} />;
};
