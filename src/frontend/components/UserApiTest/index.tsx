'use client';

import {Text} from '@mantine/core';

import {useUserApiTestQuery} from '~/gql';

export const UserApiTest = () => {
  const {data} = useUserApiTestQuery();
  return (
    <div>
      <h1>User API Test</h1>
      <Text>{data?.user.name}</Text>
    </div>
  );
};
