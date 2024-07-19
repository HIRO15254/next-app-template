'use client';

import React from 'react';

import {Group, FileInput, Input, Stack} from '@mantine/core';
import {IconUpload} from '@tabler/icons-react';

import {UserAvatar} from '~/frontend/components/UserAvatar';
import {USER_ICON_SIZE} from '~/frontend/const/userConfig';
import {UserDataType} from '~/frontend/features/auth/types/UserDataType';

import {useAvatarSettingModal} from './AvatarEditModal/hook';

type Props = {
  userData: UserDataType;
};

/**
 * ユーザーアイコンを設定するためのフォーム
 */
export const AvatarSettingsForm: React.FC<Props> = props => {
  const {userData} = props;
  const {onImageChange, image, avatarEditModal} = useAvatarSettingModal({
    user: userData,
  });

  return (
    <Stack px="md" m="auto">
      <Input.Wrapper
        label="アイコン"
        description={`アップロードしたアイコンは${USER_ICON_SIZE}px四方にリサイズされます。`}
      >
        {avatarEditModal}
        <Group pt="sm">
          <UserAvatar user={userData} size="lg" />
          <FileInput
            placeholder="ファイルを選択…"
            accept="image/*"
            leftSection={<IconUpload />}
            onChange={onImageChange}
            value={image}
          />
        </Group>
      </Input.Wrapper>
    </Stack>
  );
};
