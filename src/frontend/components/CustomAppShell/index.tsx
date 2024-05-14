import React from 'react';

import {createClient} from '~/frontend/lib/supabase/server';

import {Presentation} from './presentation';

interface Props {
  hasNavbar?: boolean;
  children: React.ReactNode;
}

export const CustomAppShell = async (props: Props) => {
  const {children, ...other} = props;
  const supabase = createClient();
  const {data: session} = await supabase.auth.getUser();

  return (
    <Presentation userData={session.user ?? undefined} {...props} {...other}>
      {children}
    </Presentation>
  );
};
