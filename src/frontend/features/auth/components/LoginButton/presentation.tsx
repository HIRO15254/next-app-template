import React from 'react';

import {Button, ButtonProps} from '@mantine/core';
import {Provider} from '@supabase/auth-js';

import {GoogleIcon} from './GoogleIcon';

interface Props extends ButtonProps {
  provider: Provider;
  onClick: () => void;
}

/**
 * @package
 */
export const Presentation: React.FC<Props> = props => {
  const {provider, children, onClick, ...rest} = props;

  let leftSection = null;
  if (provider === 'google') {
    leftSection = <GoogleIcon />;
  }

  return (
    <Button
      leftSection={leftSection}
      variant="default"
      color="gray"
      onClick={onClick}
      {...rest}
    >
      {children || `${provider}でログイン`}
    </Button>
  );
};
