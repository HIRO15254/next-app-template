import React from 'react';

import {Stack, Title, Container} from '@mantine/core';

import {LoginButton} from '../LoginButton';

interface Props {
  callbackUrl: string;
}

/**
 * ログインを行うためのフォーム
 */
export const LoginForm: React.FC<Props> = props => {
  const {callbackUrl} = props;
  return (
    <Container size="xs">
      <Title order={1} p="md">
        ログイン
      </Title>
      <Stack px="md" m="auto">
        <LoginButton provider="google" w="100%" callbackUrl={callbackUrl}>
          Googleでログイン
        </LoginButton>
      </Stack>
    </Container>
  );
};
