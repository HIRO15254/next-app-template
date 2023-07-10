'use client';

import { useDisclosure } from '@mantine/hooks';
import { showNotification } from '@mantine/notifications';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import pica from 'pica';
import React from 'react';

import { useUpdateLoginUserMutation } from 'gql';
import { supabase } from 'lib/supabase';
import { createRandomID } from 'util/createUserId';

import { OnImageSavePayload } from '../_components/AvatarEditModal';

export const useAvatarSetting = () => {
  const { data: session, update: updateSession } = useSession();
  const [opened, { open: openModal, close: closeModal }] = useDisclosure(false);
  const [image, setImage] = React.useState<File | null>(null);
  const [updateLoginUserMutation] = useUpdateLoginUserMutation();
  const router = useRouter();

  const onImageChange = (payload: File | null) => {
    setImage(payload);
    if (payload) {
      openModal();
    }
  };

  const onCloseModal = () => {
    setImage(null);
    closeModal();
  };

  const saveImageToSupabase = async (file: File, fileName: string) => {
    const avatarStorage = supabase.storage.from('avatar');
    if ((session?.user?.image ?? '').includes('object/public/avatar/')) {
      await avatarStorage.remove([session?.user.image.split('/').slice(-1)[0] || 'none']);
    }
    await avatarStorage.upload(fileName, file, { upsert: true });
    const newUrl = avatarStorage.getPublicUrl(fileName).data.publicUrl;
    return newUrl;
  };

  const onImageSave = async (payload: OnImageSavePayload) => {
    const { image: savedImage, canvas } = payload;
    const picaCanvas = await pica().resize(savedImage, canvas);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    picaCanvas.toBlob(async (blob: any) => {
      if (blob) {
        try {
          const fileName = `${session?.user.userId}_${createRandomID(12)}.png`;
          const file = new File([blob], fileName, { type: 'image/png' });
          const newUrl = await saveImageToSupabase(file, fileName);
          await updateLoginUserMutation({
            variables: {
              input: {
                image: newUrl,
              },
            },
          });
          await updateSession({ user: { ...session?.user, image: newUrl } });
          router.refresh();
          showNotification({
            color: 'teal',
            title: '更新成功',
            message: 'ユーザーアイコンを更新しました',
          });
        } catch (e) {
          showNotification({
            color: 'red',
            title: '更新失敗',
            message: 'ユーザーアイコンの更新に失敗しました',
          });
        }
      }
    });
  };

  const imageUrl = session?.user?.image ?? '';

  return {
    opened, image, onImageChange, onCloseModal, onImageSave, imageUrl,
  };
};
