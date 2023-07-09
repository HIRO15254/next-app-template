"use client";

import { Group, Tabs } from "@mantine/core";
import React from "react";

import { AvatarSettingForm } from "./AvatarSettingForm";
import { BasicUserSettingForm } from "./BasicUserSettingForm";

export const UserSettingForm = () => (
  <Group position="center" px="md">
    <Tabs defaultValue="basic" w="100%">
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