"use client"

import { ButtonProps } from "@mantine/core";
import GoogleLoginButton from "@/app/(other)/auth/login/_components/GoogleLoginButton";
import { signIn } from "next-auth/react";

interface Props extends ButtonProps {
  provider: "google",
  callback?: string;
}

export const LoginButton = (props: Props) => {
  const { provider, callback, ...rest } = props;

  const handleLogin = () => {
    signIn(provider, { callbackUrl: callback });
  };

  return (
    <>
      {provider == "google" && (
        <GoogleLoginButton onClick={handleLogin} {...rest} />
      )}
    </>
  );
}