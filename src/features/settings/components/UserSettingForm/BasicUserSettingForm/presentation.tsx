'use client';

import {
  Box,
  Button,
  Group,
  LoadingOverlay,
  Stack,
  TextInput,
  Tooltip,
} from '@mantine/core';
import {UseFormReturnType} from '@mantine/form';
import {IconAlertCircle, IconAt} from '@tabler/icons-react';
import React from 'react';

export type BasicUserSettingType = {
  userId: string;
  name: string;
  email: string;
};

type Props = {
  form: UseFormReturnType<BasicUserSettingType>;
  handleSubmit: (values: BasicUserSettingType) => void;
  loading: boolean;
};
/**
 * ユーザーの基本情報を設定するためのフォーム
 */
export const Presentation: React.FC<Props> = (props: Props) => {
  const {form, handleSubmit, loading} = props;

  // フォーム右に表示して入力値が一般公開されることを示すアイコン
  const publicTooltip = (
    <Tooltip label="一般に公開されます" position="top-end" withArrow>
      <IconAlertCircle size="1rem" style={{display: 'block'}} />
    </Tooltip>
  );

  return (
    <Box pos="relative">
      <LoadingOverlay visible={loading} />
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack>
          <TextInput
            withAsterisk
            label="ユーザーID"
            description="半角英数字とハイフン、アンダーバーのみ使用可能です"
            leftSection={<IconAt size="1.2rem" />}
            rightSection={publicTooltip}
            {...form.getInputProps('userId')}
          />
          <TextInput
            withAsterisk
            label="ユーザーネーム"
            rightSection={publicTooltip}
            {...form.getInputProps('name')}
          />
          <TextInput label="メールアドレス" {...form.getInputProps('email')} />
          <Group justify="flex-end">
            <Button type="submit" color="blue">
              更新
            </Button>
          </Group>
        </Stack>
      </form>
    </Box>
  );
};
