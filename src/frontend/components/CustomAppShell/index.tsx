import React from 'react';

import {getClient} from '~/frontend/lib/apollo/GetClient';
import {createClient} from '~/frontend/lib/supabase/server';
import {AppShellDocument, AppShellQuery} from '~/gql';

import {Presentation} from './presentation';

interface Props {
  hasNavbar?: boolean;
  children: React.ReactNode;
}

export const CustomAppShell = async (props: Props) => {
  const {children, ...other} = props;
  const supabase = createClient();
  const {data: session} = await supabase.auth.getUser();
  const {data} = await getClient().query<AppShellQuery>({
    query: AppShellDocument,
    variables: {
      id: session.user?.id || '',
    },
    errorPolicy: 'ignore',
  });
  const userData = data?.userDataCollection?.edges[0].node;

  return (
    <Presentation userData={userData} {...props} {...other}>
      {children}
    </Presentation>
  );
};
