import React from 'react';

import {Avatar, AvatarProps, Loader} from '@mantine/core';

interface UserAvatarProps extends AvatarProps {
  user: {
    name?: string | null;
    image?: string | null;
  };
}

/**
 * ユーザーアイコン
 */
export const UserAvatar: React.FC<UserAvatarProps> = props => {
  const {user, ...other} = props;

  if (!user) {
    return <Loader color="blue" size={other.size} />;
  }

  return (
    <Avatar {...other} src={user?.image} alt={user?.name || ''} radius="xl" />
  );
};
