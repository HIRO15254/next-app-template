'use client';

import React from 'react';

import {useDisclosure} from '@mantine/hooks';
import {showNotification} from '@mantine/notifications';
import {useRouter} from 'next/navigation';
import pica from 'pica';

import {uploadFile} from '~/frontend/lib/supabase/uploadFile';
import {useUpdateUserAvatarMutation} from '~/gql';

import {AvatarEditModal, type OnImageSavePayload} from './index';

type Props = {
  user: {
    userId: string;
    nodeId: string;
  };
};

/**
 * アイコン設定を行うためのカスタムフック
 */
export const useAvatarSettingModal = (props: Props) => {
  const {user} = props;
  const [opened, {open, close}] = useDisclosure(false);
  const [scale, setScale] = React.useState(1.0);
  const [image, setImage] = React.useState<File | null>(null);
  const [updateLoginUserMutation] = useUpdateUserAvatarMutation();
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
    const {image: savedImage, canvas} = payload;
    const picaCanvas = await pica().resize(savedImage, canvas);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    picaCanvas.toBlob(async (blob: any) => {
      if (blob) {
        try {
          const fileName = `${user.userId}.png`;
          const file = new File([blob], fileName, {type: 'image/png'});
          const newUrl = await uploadFile('avatar', fileName, file);
          await updateLoginUserMutation({
            variables: {
              nodeId: user.nodeId,
              imagePath: `${newUrl}?update=${Date.now()}`,
            },
          });
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
    user,
    image,
    onImageChange,
    avatarEditModal: <AvatarEditModal {...avatarEditModalProps} />,
  };
};
