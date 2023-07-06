"use client"

import {
  Avatar, Group, FileInput, Input,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconUpload } from '@tabler/icons-react';
import { useSession } from 'next-auth/react';
import pica from 'pica';
import React from 'react';

import { useUpdateLoginUserMutation } from 'gql';
import AvatarEditModal, { OnImageSavePayload } from './AvatarEditModal';
import { supabase } from "lib/supabase";
import { showNotification } from '@mantine/notifications';
import { createUserID } from 'util/createUserId';
import { useRouter } from 'next/navigation';

export const AvatarSettingForm = () => {
  const { data: session, update: updateSession } = useSession();
  const [opened, { open, close }] = useDisclosure(false);
  const [image, setImage] = React.useState<File | null>(null);
  const [updateLoginUserMutation] = useUpdateLoginUserMutation();
  const router = useRouter();

  const onImageChange = (payload: File | null) => {
    setImage(payload);
    if (payload) {
      open();
    }
    console.log(payload);
  };

  const onImageSave = async (payload: OnImageSavePayload) => {
    const { image: savedImage, canvas } = payload;
    const picaCanvas = await pica().resize(savedImage, canvas);
    picaCanvas.toBlob(async (blob: any) => {
      if (blob) {
        try {
          const avatarStorage = supabase.storage.from('avatar');
          const fileName = `${session?.user.userId}_${createUserID(12)}.png`;
          const file = new File([blob], fileName, { type: 'image/png' });

          await avatarStorage.upload(fileName, file, { upsert: true });
          try {
            await avatarStorage.remove([session?.user.image.split('/').slice(-1)[0] || 'none']);
          } catch (e) {
          }

          const newUrl = avatarStorage.getPublicUrl(fileName).data.publicUrl;
          await updateLoginUserMutation({
            variables: {
              input: {
                image: newUrl,
              },
            },
          })
          await updateSession({ user: { ...session?.user, image: newUrl }});
          router.refresh();
          showNotification({
            color: 'teal',
            title: '更新成功',
            message: 'ユーザーアイコンを更新しました',
          });
        } catch (e) {
          console.error(e);
          showNotification({
            color: 'red',
            title: '更新失敗',
            message: 'ユーザーアイコンの更新に失敗しました',
          });
        }
      }
    });
  };

  return (
    <Input.Wrapper
      label="アイコン"
      description="アップロードしたアイコンは240px四方にリサイズされます。"
    >
      <AvatarEditModal opened={opened} close={close} image={image} onImageSave={onImageSave} />
      <Group pt="sm">
        <Avatar src={session?.user.image} size="lg" radius="xl" />
        <FileInput
          placeholder="ファイルを選択…"
          accept="image/*"
          icon={<IconUpload />}
          onChange={onImageChange}
        />
      </Group>
    </Input.Wrapper>
  );
};
