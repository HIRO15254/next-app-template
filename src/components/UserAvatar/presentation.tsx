'use client';

import {Avatar, AvatarProps, Loader} from '@mantine/core';
import React from 'react';

interface UserAvatarProps extends AvatarProps {
  user?: {
    name?: string | null;
    image?: string | null;
  };
}

/**
 * ユーザーアイコン
 */
export const Presentation: React.FC<UserAvatarProps> = props => {
  const {user, ...other} = props;

  if (!user) {
    return <Loader color="blue" size={other.size} />;
  }

  return (
    <Avatar {...other} src={user?.image} alt={user?.name || ''} radius="xl" />
  );
};
