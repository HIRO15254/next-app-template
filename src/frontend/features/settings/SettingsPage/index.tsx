import {getClient} from '~/frontend/lib/apollo/GetClient';
import {SettingsPageDocument, SettingsPageQuery} from '~/gql';
import {auth} from '~/lib/nextAuth';

import {SettingsPagePresentation} from './presentation';

export const SettingsPage = async () => {
  const session = await auth();
  const {data} = await getClient().query<SettingsPageQuery>({
    query: SettingsPageDocument,
    variables: {
      token: session?.token,
    },
  });

  return <SettingsPagePresentation initialValues={{userSettings: data.user}} />;
};
