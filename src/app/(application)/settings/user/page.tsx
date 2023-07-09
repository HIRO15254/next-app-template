"use client";

import { Title } from '@mantine/core';
import React from 'react';

import { UserSettingForm } from "./_components/UserSettingForm";

const UserSetting = () => (
  <div>
    <Title order={1} p="md">ユーザー設定</Title>
    <UserSettingForm />
  </div>
);

export default UserSetting;