'use client';

import React from 'react';

import {ButtonProps} from '@mantine/core';

import {useLogin} from '../../hooks/useLogin';

import {Presentation} from './presentation';

import type {Provider} from '@supabase/auth-js';

interface Props extends Omit<ButtonProps, 'onClick'> {
  provider: Provider;
  callbackUrl?: string;
}

/**
 * プロバイダーを指定してログインを行うボタン
 * @param props.provider ログインプロバイダー
 * @param props.callbackUrl ログイン後のリダイレクト先
 */
export const LoginButton: React.FC<Props> = props => {
  const {provider, callbackUrl, children, ...rest} = props;
  const [login] = useLogin();

  const handleClick = async () => {
    await login({
      provider,
      callbackUrl,
    });
  };

  return <Presentation provider={provider} onClick={handleClick} {...rest} />;
};
