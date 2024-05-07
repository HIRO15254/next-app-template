import {Container, Tabs} from '@mantine/core';

import {UserSettingsForm} from '~/frontend/features/settings/UserSettingsForm';
import {getClient} from '~/frontend/lib/apollo/GetClient';
import {SettingsPageDocument, SettingsPageQuery} from '~/gql';

export const SettingsPage = async () => {
  const {data} = await getClient().query<SettingsPageQuery>({
    query: SettingsPageDocument,
  });

  return (
    <Container>
      <Tabs defaultValue="user">
        <Tabs.List>
          <Tabs.Tab value="user">ユーザー設定</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="user">
          <UserSettingsForm initialValues={data.user} />
        </Tabs.Panel>
      </Tabs>
    </Container>
  );
};
