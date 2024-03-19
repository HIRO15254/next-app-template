'use client';

import {Button, ButtonProps} from '@mantine/core';
import {BuiltInProviderType} from 'next-auth/providers';
import {LiteralUnion} from 'next-auth/react';
import React from 'react';

import GoogleIcon from './GoogleIcon';

interface Props extends ButtonProps {
  provider: LiteralUnion<BuiltInProviderType>;
  onClick: (provider: LiteralUnion<BuiltInProviderType>) => void;
}

export const Presentation: React.FC<Props> = props => {
  const {provider, onClick, ...rest} = props;

  let leftSection = null;
  if (provider === 'google') {
    leftSection = <GoogleIcon />;
  }

  return (
    <Button
      onClick={() => onClick(provider)}
      leftSection={leftSection}
      variant="default"
      color="gray"
      {...rest}
    />
  );
};
