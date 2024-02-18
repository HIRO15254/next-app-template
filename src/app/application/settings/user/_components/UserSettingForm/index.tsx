'use client';

import {Group, Tabs} from '@mantine/core';
import React from 'react';

import {AvatarSettingForm} from '../AvatarSettingForm';
import {BasicUserSettingForm} from '../BasicUserSettingForm';

/**
 * 各種ユーザー設定フォームをまとめたタブ
 */
export const UserSettingForm: React.FC = () => (
  <Group justify="center">
    <Tabs defaultValue="basic" w="100%" mt="md">
      <Tabs.List>
        <Tabs.Tab value="basic">基本設定</Tabs.Tab>
        <Tabs.Tab value="icon">アイコン設定</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="basic" pt="xs" px="sm">
        <BasicUserSettingForm />
      </Tabs.Panel>
      <Tabs.Panel value="icon" pt="xs" px="sm">
        <AvatarSettingForm />
      </Tabs.Panel>
    </Tabs>
  </Group>
);
