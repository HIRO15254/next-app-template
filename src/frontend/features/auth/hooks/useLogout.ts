import {createClient} from '~/frontend/lib/supabase/client';

type Return = [() => Promise<void>];

export const useLogout = (): Return => {
  const supabase = createClient();
  const login = async () => {
    const {error} = await supabase.auth.signOut();
    if (error) {
      throw new Error(error.message);
    }
  };

  return [login];
};
