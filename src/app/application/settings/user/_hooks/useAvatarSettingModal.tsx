'use client';

import { useDisclosure } from '@mantine/hooks';
import { showNotification } from '@mantine/notifications';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import pica from 'pica';
import React from 'react';

import { useUpdateLoginUserMutation } from 'gql';
import { createRandomID } from 'util/createUserId';

import { deleteFile, uploadFile } from '../../../../../util/uploadFile';
import AvatarEditModal, { OnImageSavePayload } from '../_components/AvatarEditModal';

/**
 * アイコン設定を行うためのカスタムフック
 */
export const useAvatarSettingModal = () => {
  const { data: session, update: updateSession } = useSession();
  const [opened, { open, close }] = useDisclosure(false);
  const [scale, setScale] = React.useState(1.0);
  const [image, setImage] = React.useState<File | null>(null);
  const [updateLoginUserMutation] = useUpdateLoginUserMutation();
  const router = useRouter();

  // ファイル選択時にモーダルを開く
  const onImageChange = (payload: File | null) => {
    setImage(payload);
    setScale(1.0);
    if (payload) {
      open();
    }
  };

  // モーダルを閉じたらファイルをクリアする
  const onClose = () => {
    setImage(null);
    close();
  };

  // モーダルで「更新」ボタンを押したときの処理
  const onImageSave = async (payload: OnImageSavePayload) => {
    const { image: savedImage, canvas } = payload;
    const picaCanvas = await pica().resize(savedImage, canvas);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    picaCanvas.toBlob(async (blob: any) => {
      if (blob) {
        try {
          const fileName = `${session?.user.userId}_${createRandomID(12)}.png`;
          const file = new File([blob], fileName, { type: 'image/png' });
          const newUrl = await uploadFile(file, 'avatar', fileName);
          if ((session?.user?.image ?? '').includes('object/public/avatar/')) {
            await deleteFile('avatar', session?.user.image.split('/').slice(-1)[0] || 'none');
          }
          await updateLoginUserMutation({
            variables: {
              input: {
                image: newUrl,
              },
            },
          });
          await updateSession();
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

  const avatarEditModalProps = {
    opened,
    close: onClose,
    scale,
    setScale,
    image,
    onImageSave,
  };

  return {
    user: session?.user,
    image,
    onImageChange,
    avatarEditModal: <AvatarEditModal {...avatarEditModalProps} />,
  };
};
