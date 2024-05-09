'use client';

import React from 'react';

import {Container, Tabs, Title} from '@mantine/core';

import {AppearanceSettingsForm} from '~/frontend/features/settings/AppearanceSettingsForm';
import {
  UserSettingsForm,
  UserSettingsFormType,
} from '~/frontend/features/settings/UserSettingsForm';

interface Props {
  initialValues: {
    userSettings: UserSettingsFormType;
  };
}

export const SettingsPagePresentation: React.FC<Props> = props => {
  const {initialValues} = props;
  return (
    <Container>
      <Title>設定</Title>
      <Tabs defaultValue="user" p="md">
        <Tabs.List>
          <Tabs.Tab value="user">ユーザー設定</Tabs.Tab>
          <Tabs.Tab value="appearance">外観設定</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="user" py="md">
          <Container size="sm">
            <UserSettingsForm initialValues={initialValues.userSettings} />
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
