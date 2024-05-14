'use client';

import React from 'react';

import {Button, Group, Stack, TextInput} from '@mantine/core';
import {useForm, zodResolver} from '@mantine/form';
import {notifications} from '@mantine/notifications';
import {IconAt} from '@tabler/icons-react';
import {z} from 'zod';

import {useUserSettingFormMutation} from '~/gql';
import {
  emailValidator,
  userIdValidator,
  userNameValidator,
} from '~/util/validators';

export interface UserSettingsFormType {
  userId: string;
  name: string;
  email: string;
}

interface Props {
  nodeId: string;
  initialValues: UserSettingsFormType | null;
}

/**
 * ユーザー設定を行うフォーム
 * @param props.initialValues 初期値
 */
export const UserSettingsForm: React.FC<Props> = props => {
  const {initialValues, nodeId} = props;
  const [update, {loading}] = useUserSettingFormMutation();

  return (
    <Presentation
      initialValues={initialValues}
      sending={loading}
      handleSubmit={async values => {
        await update({
          variables: {
            nodeId,
            data: {
              userId: values.userId,
              name: values.name,
              email: values.email,
            },
          },
          onCompleted: () => {
            notifications.show({
              title: '完了',
              message: 'ユーザー設定を更新しました',
              color: 'teal',
            });
          },
          onError: () => {
            notifications.show({
              title: 'エラー',
              message: 'ユーザー設定の更新に失敗しました',
              color: 'red',
            });
          },
        });
      }}
    />
  );
};

interface PresentationProps {
  initialValues: UserSettingsFormType | null;
  handleSubmit: (values: UserSettingsFormType) => void;
  sending?: boolean;
}

export const Presentation: React.FC<PresentationProps> = props => {
  const {initialValues, handleSubmit, sending} = props;

  const userSettingsFormSchema = z.object({
    userId: userIdValidator,
    name: userNameValidator,
    email: emailValidator,
  });

  const form = useForm<UserSettingsFormType>({
    mode: 'uncontrolled',
    initialValues: initialValues ?? ({} as UserSettingsFormType),
    validate: zodResolver(userSettingsFormSchema),
  });

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack px="md" m="auto">
        <TextInput
          withAsterisk
          leftSection={<IconAt size="1.2rem" />}
          label="ユーザーID"
          description="各ユーザーを識別するための一意のIDです。この情報は一般に公開されます。"
          placeholder={initialValues?.userId ?? 'ユーザーID'}
          key={form.key('userId')}
          {...form.getInputProps('userId')}
        />
        <TextInput
          withAsterisk
          label="ユーザーネーム"
          description="アプリケーション内で表示される名前です。本名である必要はありません。この情報は一般に公開されます。"
          placeholder={initialValues?.name ?? 'ユーザーネーム'}
          key={form.key('name')}
          {...form.getInputProps('name')}
        />
        <TextInput
          withAsterisk
          label="メールアドレス"
          description="各種通知を受け取るメールアドレスです。この情報は一般に公開されません。"
          placeholder={initialValues?.email ?? 'メールアドレス'}
          key={form.key('email')}
          {...form.getInputProps('email')}
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
