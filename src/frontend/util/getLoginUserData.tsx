import {getClient} from '~/frontend/lib/apollo/GetClient';
import {createClient} from '~/frontend/lib/supabase/server';
import {LoginUserDataDocument, LoginUserDataQuery, UserData} from '~/gql';

/**
 * ログイン中のユーザーのデータをすべて取得する(server components用)
 * @returns ログインしていればログイン中のユーザーのデータ、していなければnull
 */
export const getLoginUserData = async (): Promise<UserData | null> => {
  const supabase = createClient();
  const {data: session} = await supabase.auth.getUser();
  if (!session.user) {
    return null;
  }
  const {data} = await getClient().query<LoginUserDataQuery>({
    query: LoginUserDataDocument,
    variables: {
      id: session.user?.id || '',
    },
  });
  const userData = data?.userDataCollection?.edges[0]?.node;
  return userData ?? null;
};
