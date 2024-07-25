import {getClient} from '~/frontend/lib/apollo/GetClient';
import {LoginUserDataDocument, LoginUserDataQuery} from '~/gql';

import {UserDataType} from '../types/UserDataType';

/**
 * ログイン中のユーザーのデータをすべて取得する(server components用)
 * @returns ログインしていればログイン中のユーザーのデータ、していなければnull
 */
export const getLoginUserData = async (): Promise<UserDataType | null> => {
  const {data, errors} = await getClient().query<LoginUserDataQuery>({
    query: LoginUserDataDocument,
    fetchPolicy: 'network-only',
  });
  if (errors) {
    throw new Error(
      `ログインユーザーの取得中にエラーが発生しました。\n${errors.join('\n')}`
    );
  }
  if (!data.loginUserData) {
    return null;
  }
  const userData = data.loginUserData;
  return {
    id: userData.id,
    userId: userData.userId,
    nodeId: userData.nodeId,
    name: userData.name,
    email: userData.email,
    image: userData.image ?? undefined,
  };
};
