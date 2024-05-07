'use client';

import React from 'react';

import {Button, Group, Stack, TextInput} from '@mantine/core';
import {useForm, zodResolver} from '@mantine/form';
import {IconAt} from '@tabler/icons-react';
import {z} from 'zod';

import {useUpdateUserSettingsMutation} from '~/gql';
import {
  emailValidator,
  userIdValidator,
  userNameValidator,
} from '~/util/validators';

interface UserSettingsFormType {
  userId: string;
  name: string;
  email: string;
}

interface Props {
  initialValues: UserSettingsFormType | null;
}

/**
 * ユーザー設定を行うフォーム
 * @param props.initialValues 初期値
 * @param props.handleSubmit 送信時の処理
 */
export const UserSettingsForm: React.FC<Props> = props => {
  const {initialValues} = props;
  const [update] = useUpdateUserSettingsMutation();

  return (
    <Presentation
      initialValues={initialValues}
      handleSubmit={async values => {
        await update({variables: {input: values}});
      }}
    />
  );
};

interface PresentationProps {
  initialValues: UserSettingsFormType | null;
  handleSubmit: (values: UserSettingsFormType) => void;
}

export const Presentation: React.FC<PresentationProps> = props => {
  const {initialValues, handleSubmit} = props;

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
          placeholder={initialValues?.userId ?? 'ユーザーID'}
          key={form.key('userId')}
          {...form.getInputProps('userId')}
        />
        <TextInput
          withAsterisk
          label="ユーザーネーム"
          placeholder={initialValues?.name ?? 'ユーザーネーム'}
          key={form.key('name')}
          {...form.getInputProps('name')}
        />
        <TextInput
          withAsterisk
          label="メールアドレス"
          placeholder={initialValues?.email ?? 'メールアドレス'}
          key={form.key('email')}
          {...form.getInputProps('email')}
        />
        <Group justify="flex-end">
          <Button type="submit" mt="sm">
            Submit
          </Button>
        </Group>
      </Stack>
    </form>
  );
};
