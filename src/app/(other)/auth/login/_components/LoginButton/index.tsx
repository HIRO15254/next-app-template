"use client"

import { clientComponentSupabase } from "@/lib/supabase";
import { ButtonProps } from "@mantine/core";
import GoogleLoginButton from "@/app/(other)/auth/login/_components/GoogleLoginButton";

interface Props extends ButtonProps {
  provider: "google",
  callback?: string;
}

export const LoginButton = (props: Props) => {
  const { provider, callback, ...rest } = props;

  const handleLogin = async () => {
    const { error } = await clientComponentSupabase.auth.signInWithOAuth({
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