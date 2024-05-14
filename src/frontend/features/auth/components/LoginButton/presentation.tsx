'use client';

import React from 'react';

import {Button, ButtonProps} from '@mantine/core';
import {Provider} from '@supabase/auth-js';

import {createClient} from '~/frontend/lib/supabase/client';

import {GoogleIcon} from './GoogleIcon';

interface Props extends ButtonProps {
  provider: Provider;
  callbackUrl?: string;
}

export const Presentation: React.FC<Props> = props => {
  const {provider, children, callbackUrl, ...rest} = props;
  const supabase = createClient();

  let leftSection = null;
  if (provider === 'google') {
    leftSection = <GoogleIcon />;
  }

  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${window.location.origin}/api/auth/callback?next=${callbackUrl ?? '/'}`,
      },
    });
  };

  return (
    <Button
      leftSection={leftSection}
      variant="default"
      color="gray"
      onClick={handleLogin}
      {...rest}
    >
      {children || `${provider}でログイン`}
    </Button>
  );
};
