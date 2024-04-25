import React from 'react';

import {Stack, Title, Container} from '@mantine/core';

import {LoginButton} from '../LoginButton';

interface Props {
  callbackUrl: string;
}

/**
 * ログインを行うためのフォーム
 */
export const Presentation: React.FC<Props> = props => {
  const {callbackUrl} = props;
  return (
    <Container size="xs">
      <Title order={1} p="md">
        ログイン
      </Title>
      <Stack px="md" m="auto" style={{maxWidth: '480px'}}>
        <LoginButton provider="google" callbackUrl={callbackUrl}>
          Googleでログイン
        </LoginButton>
      </Stack>
    </Container>
  );
};
