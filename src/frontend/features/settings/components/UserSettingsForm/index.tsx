'use client';

import React from 'react';

import {useForm, zodResolver} from '@mantine/form';
import {notifications} from '@mantine/notifications';
import {z} from 'zod';

import {UserSettingsFormPresentation} from '~/frontend/features/settings/components/UserSettingsForm/presentation';
import {
  errorNotification,
  successNotification,
} from '~/frontend/util/notifications';
import {
  emailValidator,
  userIdValidator,
  userNameValidator,
} from '~/frontend/util/validators';
import {useUserSettingFormMutation} from '~/gql';

interface Props {
  userData: {
    nodeId: string;
    userId: string;
    name?: string;
    email?: string;
  };
}

type UserSettingsFormType = {
  userId: string;
  name: string;
  email: string;
};

/**
 * ユーザー設定を行うフォーム
 * @param props.initialValues 初期値
 */
export const UserSettingsForm: React.FC<Props> = props => {
  const {userData} = props;
  const [update, {loading}] = useUserSettingFormMutation();

  const userSettingsFormSchema = z.object({
    userId: userIdValidator,
    name: userNameValidator,
    email: emailValidator,
  });

  const form = useForm<UserSettingsFormType>({
    mode: 'uncontrolled',
    initialValues: {
      userId: userData.userId,
      name: userData.name ?? '',
      email: userData.email ?? '',
    },
    validate: zodResolver(userSettingsFormSchema),
  });

  const handleSubmit = async (values: UserSettingsFormType) => {
    await update({
      variables: {
        nodeId: userData.nodeId,
        data: {
          userId: values.userId,
          name: values.name,
          email: values.email,
        },
      },
      onCompleted: () => {
        successNotification('ユーザー設定を更新しました');
      },
      onError: e => {
        errorNotification(e);
      },
    });
  };

  return (
    <UserSettingsFormPresentation
      inputProps={{
        userId: form.getInputProps('userId'),
        name: form.getInputProps('name'),
        email: form.getInputProps('email'),
      }}
      sending={loading}
      onSubmit={form.onSubmit(handleSubmit)}
    />
  );
};
