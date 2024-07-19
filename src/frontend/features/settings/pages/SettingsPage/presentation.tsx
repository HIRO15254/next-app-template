'use client';

import React from 'react';

import {Container, Tabs, Title} from '@mantine/core';

import {UserDataType} from '~/frontend/features/auth/types/UserDataType';

import {AppearanceSettingsForm} from '../../components/AppearanceSettingsForm';
import {AvatarSettingsForm} from '../../components/AvatarSettingsForm';
import {UserSettingsForm} from '../../components/UserSettingsForm';

interface Props {
  userData: UserDataType;
}

export const SettingsPagePresentation: React.FC<Props> = props => {
  const {userData} = props;
  return (
    <Container>
      <Title>設定</Title>
      <Tabs defaultValue="user" py="md">
        <Tabs.List>
          <Tabs.Tab value="user">ユーザー設定</Tabs.Tab>
          <Tabs.Tab value="avatar">アイコン設定</Tabs.Tab>
          <Tabs.Tab value="appearance">外観設定</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="user" py="md">
          <Container size="sm">
            <UserSettingsForm userData={userData} />
          </Container>
        </Tabs.Panel>
        <Tabs.Panel value="avatar" py="md">
          <Container size="sm">
            <AvatarSettingsForm userData={userData} />
          </Container>
        </Tabs.Panel>
        <Tabs.Panel value="appearance" py="md">
          <Container size="sm">
            <AppearanceSettingsForm />
          </Container>
        </Tabs.Panel>
      </Tabs>
    </Container>
  );
};
