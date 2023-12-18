'use client';

import { useForm, zodResolver } from '@mantine/form';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { z } from 'zod';

import { GetLoginUserQuery, useGetLoginUserQuery, useUpdateLoginUserMutation } from 'gql';
import { errorNotification, successNotification } from 'util/notifications';
import { userIdValidator, userNameValidator, emailValidator } from 'util/validators';

export type BasicUserSettingType = {
  userId: string
  name: string
  email: string
};

/**
 * ユーザー基本情報設定を行うためのカスタムフック
 */
export const useBasicUserSettingForm = () => {
  const router = useRouter();
  const { update: updateSession } = useSession();

  const form = useForm<BasicUserSettingType>({
    initialValues: {
      userId: '',
      name: '',
      email: '',
    },
    validate: zodResolver(
      z.object({
        userId: userIdValidator,
        name: userNameValidator,
        email: emailValidator,
      }),
    ),
  });

  const initializeForm = (data: GetLoginUserQuery) => {
    if (data?.user) {
      form.setValues({
        userId: data?.user.userId || undefined,
        name: data?.user.name || undefined,
        email: data?.user.email || undefined,
      });
    }
  };

  const { loading } = useGetLoginUserQuery({ onCompleted: initializeForm });
  const [updateUser] = useUpdateLoginUserMutation();

  const onSubmit = async (values: BasicUserSettingType) => {
    updateUser({
      variables: {
        input: values,
      },
    }).then(async () => {
      successNotification({
        title: '更新成功',
        message: 'ユーザー情報を更新しました',
      });
      await updateSession();
      router.refresh();
    }).catch(() => {
      errorNotification({
        title: '更新失敗',
        message: 'ユーザー情報の更新に失敗しました',
      });
    });
  };

  return {
    form,
    onSubmit,
    loading,
  };
};
