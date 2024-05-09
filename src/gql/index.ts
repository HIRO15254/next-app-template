import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: { input: any; output: any; }
};

export type DeleteUserInput = {
  token?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['String']['input'];
};

export type GetUserInput = {
  token?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  deleteUser: User;
  updateUser: User;
};


export type MutationDeleteUserArgs = {
  input: DeleteUserInput;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};

export type Node = {
  id: Scalars['ID']['output'];
};

export type Query = {
  __typename?: 'Query';
  node?: Maybe<Node>;
  nodes: Array<Maybe<Node>>;
  user: User;
};


export type QueryNodeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryNodesArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type QueryUserArgs = {
  input: GetUserInput;
};

export type UpdateUserInput = {
  data: UserInput;
  token?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type User = Node & {
  __typename?: 'User';
  createdAt: Scalars['Date']['output'];
  databaseId: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  role: UserRole;
  updatedAt: Scalars['Date']['output'];
  userId: Scalars['String']['output'];
};

export type UserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export enum UserRole {
  Admin = 'ADMIN',
  User = 'USER'
}

export type SettingsPageQueryVariables = Exact<{
  token: Scalars['String']['input'];
}>;


export type SettingsPageQuery = { __typename?: 'Query', user: { __typename?: 'User', id: string, userId: string, name: string, email: string, role: UserRole } };

export type UpdateUserSettingsMutationVariables = Exact<{
  input: UserInput;
}>;


export type UpdateUserSettingsMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'User', id: string, userId: string, name: string, email: string, role: UserRole } };

export type UserFragmentFragment = { __typename?: 'User', id: string, userId: string, name: string, email: string, role: UserRole };

export const UserFragmentFragmentDoc = gql`
    fragment UserFragment on User {
  id
  userId
  name
  email
  role
}
    `;
export const SettingsPageDocument = gql`
    query SettingsPage($token: String!) {
  user(input: {token: $token}) {
    ...UserFragment
  }
}
    ${UserFragmentFragmentDoc}`;

/**
 * __useSettingsPageQuery__
 *
 * To run a query within a React component, call `useSettingsPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useSettingsPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSettingsPageQuery({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useSettingsPageQuery(baseOptions: Apollo.QueryHookOptions<SettingsPageQuery, SettingsPageQueryVariables> & ({ variables: SettingsPageQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SettingsPageQuery, SettingsPageQueryVariables>(SettingsPageDocument, options);
      }
export function useSettingsPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SettingsPageQuery, SettingsPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SettingsPageQuery, SettingsPageQueryVariables>(SettingsPageDocument, options);
        }
export function useSettingsPageSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<SettingsPageQuery, SettingsPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SettingsPageQuery, SettingsPageQueryVariables>(SettingsPageDocument, options);
        }
export type SettingsPageQueryHookResult = ReturnType<typeof useSettingsPageQuery>;
export type SettingsPageLazyQueryHookResult = ReturnType<typeof useSettingsPageLazyQuery>;
export type SettingsPageSuspenseQueryHookResult = ReturnType<typeof useSettingsPageSuspenseQuery>;
export type SettingsPageQueryResult = Apollo.QueryResult<SettingsPageQuery, SettingsPageQueryVariables>;
export const UpdateUserSettingsDocument = gql`
    mutation UpdateUserSettings($input: UserInput!) {
  updateUser(input: {data: $input}) {
    ...UserFragment
  }
}
    ${UserFragmentFragmentDoc}`;
export type UpdateUserSettingsMutationFn = Apollo.MutationFunction<UpdateUserSettingsMutation, UpdateUserSettingsMutationVariables>;

/**
 * __useUpdateUserSettingsMutation__
 *
 * To run a mutation, you first call `useUpdateUserSettingsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserSettingsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserSettingsMutation, { data, loading, error }] = useUpdateUserSettingsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserSettingsMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserSettingsMutation, UpdateUserSettingsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserSettingsMutation, UpdateUserSettingsMutationVariables>(UpdateUserSettingsDocument, options);
      }
export type UpdateUserSettingsMutationHookResult = ReturnType<typeof useUpdateUserSettingsMutation>;
export type UpdateUserSettingsMutationResult = Apollo.MutationResult<UpdateUserSettingsMutation>;
export type UpdateUserSettingsMutationOptions = Apollo.BaseMutationOptions<UpdateUserSettingsMutation, UpdateUserSettingsMutationVariables>;