import {getClient} from '~/frontend/lib/apollo/GetClient';
import {createClient} from '~/frontend/lib/supabase/server';
import {SettingsPageDocument, SettingsPageQuery} from '~/gql';

import {SettingsPagePresentation} from './presentation';

export const SettingsPage = async () => {
  const supabase = createClient();
  const {data: session} = await supabase.auth.getUser();
  const {data} = await getClient().query<SettingsPageQuery>({
    query: SettingsPageDocument,
    variables: {
      id: session.user?.id || '',
    },
  });
  const user = data.userDataCollection?.edges[0].node;

  return (
    <SettingsPagePresentation
      nodeId={user?.nodeId || ''}
      initialValues={{
        userSettings: {
          userId: user?.userId || '',
          name: user?.name || '',
          email: user?.email || '',
        },
      }}
    />
  );
};
