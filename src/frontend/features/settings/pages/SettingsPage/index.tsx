import React from 'react';

import {getClient} from '~/frontend/lib/apollo/GetClient';
import {createClient} from '~/frontend/lib/supabase/server';
import {SettingsPageDocument, SettingsPageQuery} from '~/gql';

import {SettingsPagePresentation} from './presentation';

/**
 * 設定ページ
 */
export const SettingsPage: React.FC = async () => {
  const supabase = createClient();
  const {data: session} = await supabase.auth.getUser();
  const {data} = await getClient().query<SettingsPageQuery>({
    query: SettingsPageDocument,
    variables: {
      id: session.user?.id || '',
    },
  });
  const user = data.userDataCollection?.edges[0]?.node;
  if (!user) return null;

  return (
    <SettingsPagePresentation
      user={{
        name: user.name || '',
        email: user.email || '',
        image: user.image || '',
        userId: user.userId,
        nodeId: user.nodeId,
      }}
    />
  );
};
