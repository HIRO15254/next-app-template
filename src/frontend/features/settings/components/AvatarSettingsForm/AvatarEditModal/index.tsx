'use client';

import React from 'react';

import {Modal, Stack, Text, Slider, Group, Button} from '@mantine/core';
import AvatarEditor from 'react-avatar-editor';

import {USER_ICON_SIZE} from '~/frontend/const/userConfig';

export type OnImageSavePayload = {
  canvas: HTMLCanvasElement;
  image: HTMLCanvasElement;
};

type Props = {
  opened: boolean;
  close: () => void;
  scale: number;
  setScale: (value: number) => void;
  image: File | null;
  onImageSave: (payload: OnImageSavePayload) => void;
};

/**
 * ユーザーアイコンの編集(拡大・中心の変更)を行うためのモーダル
 */
export const AvatarEditModal: React.FC<Props> = props => {
  const {opened, close, scale, setScale, image, onImageSave} = props;

  const editorRef = React.useRef<AvatarEditor>(null);

  const onSaveButtonClick = () => {
    if (editorRef.current) {
      onImageSave({
        canvas: editorRef.current.getImageScaledToCanvas(),
        image: editorRef.current.getImage(),
      });
      close();
    }
  };

  return (
    <Modal opened={opened} onClose={close} size="auto" title="アイコンの編集">
      <Stack>
        <AvatarEditor
          ref={editorRef}
          image={image ?? ''}
          scale={scale}
          width={USER_ICON_SIZE}
          height={USER_ICON_SIZE}
          borderRadius={USER_ICON_SIZE}
          border={0}
        />
        <Text>拡大率</Text>
        <Slider
          min={100}
          max={500}
          step={1}
          label={null}
          defaultValue={scale}
          onChange={value => {
            setScale(value / 100);
          }}
        />
        <Group justify="flex-end">
          <Button onClick={onSaveButtonClick}>更新</Button>
        </Group>
      </Stack>
    </Modal>
  );
};
