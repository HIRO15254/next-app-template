"use client"

import { supabase } from "@/lib/supabase";
import { ButtonProps } from "@mantine/core";
import GoogleLoginButton from "../GoogleLoginButton";

interface Props extends ButtonProps {
  provider: "google",
  callback?: string;
}

export const LoginButton = (props: Props) => {
  const { provider, callback, ...rest } = props;

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: provider,
      options: {
        redirectTo: callback || undefined,
      }
    });
    if (error) {
      console.log(error);
    }
  };

  return (
    <>
      {provider == "google" && (
        <GoogleLoginButton onClick={handleLogin} {...rest} />
      )}
    </>
  );
}