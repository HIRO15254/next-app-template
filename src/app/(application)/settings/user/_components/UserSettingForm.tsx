"use client";

import { Group, Paper, Tabs } from "@mantine/core";
import React from "react";

import { AvatarSettingForm } from "./AvatarSettingForm";
import { BasicUserSettingForm } from "./BasicUserSettingForm";

export const UserSettingForm = () => (
    <Group position="center">
      <Paper  maw={600} w="100%">
        <Tabs defaultValue="basic">
          <Tabs.List>
            <Tabs.Tab value="basic">基本設定</Tabs.Tab>
            <Tabs.Tab value="icon">アイコン設定</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="basic" pt="xs">
            <BasicUserSettingForm />
          </Tabs.Panel>

          <Tabs.Panel value="icon" pt="xs">
            <AvatarSettingForm />
          </Tabs.Panel>
        </Tabs>
      </Paper>
    </Group>
  );