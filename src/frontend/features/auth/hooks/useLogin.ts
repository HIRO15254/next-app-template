import {Provider} from '@supabase/auth-js';

import {createClient} from '~/frontend/lib/supabase/client';

type LoginArgs = {
  provider: Provider;
  callbackUrl?: string;
};

type Return = [(args: LoginArgs) => Promise<void>];

export const useLogin = (): Return => {
  const supabase = createClient();
  const login = async (args: LoginArgs) => {
    const {provider, callbackUrl} = args;
    const {error} = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${window.location.origin}/api/auth/callback?next=${callbackUrl ?? '/'}`,
      },
    });
    if (error) {
      throw new Error(error.message);
    }
  };

  return [login];
};
