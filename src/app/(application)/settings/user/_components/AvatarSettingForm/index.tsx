"use client";

import {
  Avatar, Group, FileInput, Input,
} from '@mantine/core';
import { IconUpload } from '@tabler/icons-react';
import React from 'react';

import { useAvatarSetting } from '../../_hooks/useAvatarSetting';
import AvatarEditModal from '../AvatarEditModal';


export const AvatarSettingForm = () => {
  const {
    opened: openedModal,
    image,
    imageUrl,
    onImageChange,
    onCloseModal, 
    onImageSave
  } = useAvatarSetting();

  return (
    <Input.Wrapper
      label="アイコン"
      description="アップロードしたアイコンは240px四方にリサイズされます。"
    >
      <AvatarEditModal 
        opened={openedModal}
        close={onCloseModal}
        image={image}
        onImageSave={onImageSave}
      />
      <Group pt="sm">
        <Avatar src={imageUrl} size="lg" radius="xl" />
        <FileInput
          placeholder="ファイルを選択…"
          accept="image/*"
          icon={<IconUpload />}
          onChange={onImageChange}
          value={image}
        />
      </Group>
    </Input.Wrapper>
  );
};
