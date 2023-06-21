"use client"

import { Button, ButtonProps } from '@mantine/core';
import React from 'react';

import GoogleIcon from 'app/(other)/auth/login/_components/GoogleIcon';

interface Props extends ButtonProps {
  onClick: () => void;
};

/**
 * Googleアカウントを利用してのログインを行うボタン。
 * @param props mantine標準のButtonPropsを継承。
*/
const GoogleLoginButton = (props : Props) => {
  return (
    <Button
      leftIcon={<GoogleIcon />}
      variant="default"
      color="gray"
      {...props}
    />
  );
};

export default GoogleLoginButton;