'use client';

import {
  Group, FileInput, Input,
} from '@mantine/core';
import { IconUpload } from '@tabler/icons-react';
import React from 'react';

import { UserAvatar } from 'components/parts/UserAvatar';
import { USER_ICON_SIZE } from 'config/userConfig';

import { useAvatarSettingModal } from '../../_hooks/useAvatarSettingModal';

/**
 * ユーザーアイコンを設定するためのフォーム
 */
export const AvatarSettingForm: React.FC = () => {
  const {
    user,
    onImageChange,
    image,
    avatarEditModal,
  } = useAvatarSettingModal();

  return (
    <Input.Wrapper
      label="アイコン"
      description={`アップロードしたアイコンは${USER_ICON_SIZE}px四方にリサイズされます。`}
    >
      {avatarEditModal}
      <Group pt="sm">
        <UserAvatar user={user} size="lg" />
        <FileInput
          placeholder="ファイルを選択…"
          accept="image/*"
          leftSection={<IconUpload />}
          onChange={onImageChange}
          value={image}
        />
      </Group>
    </Input.Wrapper>
  );
};
