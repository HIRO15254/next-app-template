import React from 'react';

import {Button, ButtonProps} from '@mantine/core';
import {BuiltInProviderType} from 'next-auth/providers';
import {LiteralUnion} from 'next-auth/react';

import {GoogleIcon} from './GoogleIcon';

interface Props extends ButtonProps {
  provider: LiteralUnion<BuiltInProviderType>;
}

export const Presentation: React.FC<Props> = props => {
  const {provider, children, ...rest} = props;

  let leftSection = null;
  if (provider === 'google') {
    leftSection = <GoogleIcon />;
  }

  return (
    <Button
      type="submit"
      leftSection={leftSection}
      variant="default"
      color="gray"
      {...rest}
    >
      {children || `${provider}でログイン`}
    </Button>
  );
};
