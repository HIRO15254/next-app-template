import React from 'react';

import {Container, Stack, TextInput, Title} from '@mantine/core';

interface Props {
  form?:
}

/**
 * ログインを行うためのフォーム
 */
export const Presentation: React.FC<Props> = props => {
  const {callbackUrl} = props;
  return (
    <Container size="md">
      <Title order={1} p="md">
        基本設定
      </Title>
      <Stack px="md" m="auto">
        <TextInput label="名前" placeholder="名前" />
        <TextInput label="メールアドレス" placeholder="メールアドレス" />
      </Stack>
    </Container>
  );
};
