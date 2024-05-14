import React from 'react';

import {ButtonProps} from '@mantine/core';
import {Provider} from '@supabase/auth-js';

import {Presentation} from './presentation';

interface Props extends Omit<ButtonProps, 'onClick'> {
  provider: Provider;
  callbackUrl?: string;
}

/**
 * プロバイダーを指定してログインを行うボタン
 * @param props mantineのButtonPropsを継承 + provider: プロバイダー名 + callback: コールバックURL
 */
export const LoginButton: React.FC<Props> = props => {
  const {provider, children, ...rest} = props;

  return <Presentation provider={provider} {...rest} />;
};
