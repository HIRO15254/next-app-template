"use client";

import { Box, Button, Group, LoadingOverlay, TextInput, Tooltip } from "@mantine/core";
import { useForm } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import { IconAlertCircle, IconAt } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import React from "react";

import { GetLoginUserQuery, useGetLoginUserQuery, useUpdateLoginUserMutation } from "gql";
import { emailValidator, userNameValidator, userIdValidator } from "util/validators";

export const BasicUserSettingForm = () => {
  const form = useForm({
    initialValues: {
      userId: '',
      name: '',
      email: ''
    },
    validate: {
      userId: userIdValidator,
      name: userNameValidator,
      email: emailValidator
    }
  });

  const initializeForm = (data: GetLoginUserQuery) => {
    if (data?.loginUser) {
      form.setValues({
        userId: data?.loginUser.userId || "",
        name: data?.loginUser.name || "",
        email: data?.loginUser.email || ""
      });
    }
  };

  const { loading } = useGetLoginUserQuery({onCompleted: initializeForm});
  const [ updateUser ] = useUpdateLoginUserMutation();
  const router = useRouter();

  const submitForm = (values: typeof form.values) => {
    updateUser({
      variables: {
        input: {
          newUserId: values.userId,
          name: values.name,
          email: values.email
        }
      }
    }).then(() => {
      showNotification({
        color: 'teal',
        title: '更新成功',
        message: 'ユーザー情報を更新しました',
      });
      router.refresh();
      document.dispatchEvent(new Event('visibilitychange'));
    }).catch(() => {
      showNotification({
        color: 'red',
        title: '更新失敗',
        message: 'ユーザー情報の更新に失敗しました',
      });
    });
  };


  const publicTooltip = (
    <Tooltip label="一般に公開されます" position="top-end" withArrow>
      <div>
        <IconAlertCircle size="1rem" style={{ display: 'block', opacity: 0.5 }} />
      </div>
    </Tooltip>
  );

  return (
    <Box pos="relative">
      <LoadingOverlay visible={loading}/>
      <form onSubmit={form.onSubmit(submitForm)}>
        <TextInput
          withAsterisk
          label="ユーザーID"
          description="半角英数字とハイフン、アンダーバーのみ使用可能です"
          icon={<IconAt size="1.2rem" />}
          rightSection={publicTooltip}
          {...form.getInputProps('userId')}
          pb="md"
        />
        <TextInput
          withAsterisk
          label="ユーザーネーム"
          rightSection={publicTooltip}
          {...form.getInputProps('name')}
          pb="md"
        />
        <TextInput
          label="メールアドレス"
          rightSection={publicTooltip}
          {...form.getInputProps('email')}
          pb="md"
        />
        <Group position="right">
          <Button type="submit" color="blue">
            更新
          </Button>
        </Group>
      </form>
    </Box>
  );
};