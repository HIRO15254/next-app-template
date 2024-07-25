import React from 'react';

import {Button, Group, Stack, TextInput, TextInputProps} from '@mantine/core';
import {IconAt} from '@tabler/icons-react';

type Props = {
  inputProps: {
    userId: TextInputProps;
    name: TextInputProps;
    email: TextInputProps;
  };
  onSubmit: () => void;
  sending: boolean;
};

/**
 * @package
 */
export const Presentation: React.FC<Props> = props => {
  const {inputProps, onSubmit, sending} = props;

  return (
    <form onSubmit={onSubmit}>
      <Stack px="md" m="auto">
        <TextInput
          withAsterisk
          leftSection={<IconAt size="1.2rem" />}
          label="ユーザーID"
          description="各ユーザーを識別するための一意のIDです。この情報は一般に公開されます。"
          {...inputProps.userId}
        />
        <TextInput
          withAsterisk
          label="ユーザーネーム"
          description="アプリケーション内で表示される名前です。本名である必要はありません。この情報は一般に公開されます。"
          {...inputProps.name}
        />
        <TextInput
          withAsterisk
          label="メールアドレス"
          description="各種通知を受け取るメールアドレスです。この情報は一般に公開されません。"
          {...inputProps.email}
        />
        <Group justify="flex-end">
          <Button type="submit" mt="sm" loading={sending}>
            更新
          </Button>
        </Group>
      </Stack>
    </form>
  );
};
