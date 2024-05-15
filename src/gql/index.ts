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
  BigFloat: { input: string; output: string; }
  BigInt: { input: string; output: string; }
  Cursor: { input: any; output: any; }
  Date: { input: string; output: string; }
  Datetime: { input: string; output: string; }
  JSON: { input: string; output: string; }
  Opaque: { input: any; output: any; }
  Time: { input: string; output: string; }
  UUID: { input: string; output: string; }
};

/** Boolean expression comparing fields on type "BigFloat" */
export type BigFloatFilter = {
  eq?: InputMaybe<Scalars['BigFloat']['input']>;
  gt?: InputMaybe<Scalars['BigFloat']['input']>;
  gte?: InputMaybe<Scalars['BigFloat']['input']>;
  in?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['BigFloat']['input']>;
  lte?: InputMaybe<Scalars['BigFloat']['input']>;
  neq?: InputMaybe<Scalars['BigFloat']['input']>;
};

/** Boolean expression comparing fields on type "BigInt" */
export type BigIntFilter = {
  eq?: InputMaybe<Scalars['BigInt']['input']>;
  gt?: InputMaybe<Scalars['BigInt']['input']>;
  gte?: InputMaybe<Scalars['BigInt']['input']>;
  in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['BigInt']['input']>;
  lte?: InputMaybe<Scalars['BigInt']['input']>;
  neq?: InputMaybe<Scalars['BigInt']['input']>;
};

/** Boolean expression comparing fields on type "Boolean" */
export type BooleanFilter = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  is?: InputMaybe<FilterIs>;
};

/** Boolean expression comparing fields on type "Date" */
export type DateFilter = {
  eq?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<Scalars['Date']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  neq?: InputMaybe<Scalars['Date']['input']>;
};

/** Boolean expression comparing fields on type "Datetime" */
export type DatetimeFilter = {
  eq?: InputMaybe<Scalars['Datetime']['input']>;
  gt?: InputMaybe<Scalars['Datetime']['input']>;
  gte?: InputMaybe<Scalars['Datetime']['input']>;
  in?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Datetime']['input']>;
  lte?: InputMaybe<Scalars['Datetime']['input']>;
  neq?: InputMaybe<Scalars['Datetime']['input']>;
};

export enum FilterIs {
  NotNull = 'NOT_NULL',
  Null = 'NULL'
}

/** Boolean expression comparing fields on type "Float" */
export type FloatFilter = {
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  neq?: InputMaybe<Scalars['Float']['input']>;
};

/** Boolean expression comparing fields on type "ID" */
export type IdFilter = {
  eq?: InputMaybe<Scalars['ID']['input']>;
};

/** Boolean expression comparing fields on type "Int" */
export type IntFilter = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  neq?: InputMaybe<Scalars['Int']['input']>;
};

/** The root type for creating and mutating data */
export type Mutation = {
  __typename?: 'Mutation';
  /** Deletes zero or more records from the `UserData` collection */
  deleteFromUserDataCollection: UserDataDeleteResponse;
  /** Adds one or more `UserData` records to the collection */
  insertIntoUserDataCollection?: Maybe<UserDataInsertResponse>;
  string_random?: Maybe<Scalars['String']['output']>;
  /** Updates zero or more records in the `UserData` collection */
  updateUserDataCollection: UserDataUpdateResponse;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromUserDataCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<UserDataFilter>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoUserDataCollectionArgs = {
  objects: Array<UserDataInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationString_RandomArgs = {
  p_length?: InputMaybe<Scalars['Int']['input']>;
  p_source?: InputMaybe<Scalars['String']['input']>;
};


/** The root type for creating and mutating data */
export type MutationUpdateUserDataCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<UserDataFilter>;
  set: UserDataUpdateInput;
};

export type Node = {
  /** Retrieves a record by `ID` */
  nodeId: Scalars['ID']['output'];
};

/** Boolean expression comparing fields on type "Opaque" */
export type OpaqueFilter = {
  eq?: InputMaybe<Scalars['Opaque']['input']>;
  is?: InputMaybe<FilterIs>;
};

/** Defines a per-field sorting order */
export enum OrderByDirection {
  /** Ascending order, nulls first */
  AscNullsFirst = 'AscNullsFirst',
  /** Ascending order, nulls last */
  AscNullsLast = 'AscNullsLast',
  /** Descending order, nulls first */
  DescNullsFirst = 'DescNullsFirst',
  /** Descending order, nulls last */
  DescNullsLast = 'DescNullsLast'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

/** The root type for querying data */
export type Query = {
  __typename?: 'Query';
  /** Retrieve a record by its `ID` */
  node?: Maybe<Node>;
  /** A pagable collection of type `UserData` */
  userDataCollection?: Maybe<UserDataConnection>;
};


/** The root type for querying data */
export type QueryNodeArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root type for querying data */
export type QueryUserDataCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<UserDataFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserDataOrderBy>>;
};

/** Boolean expression comparing fields on type "String" */
export type StringFilter = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  iregex?: InputMaybe<Scalars['String']['input']>;
  is?: InputMaybe<FilterIs>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  regex?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression comparing fields on type "Time" */
export type TimeFilter = {
  eq?: InputMaybe<Scalars['Time']['input']>;
  gt?: InputMaybe<Scalars['Time']['input']>;
  gte?: InputMaybe<Scalars['Time']['input']>;
  in?: InputMaybe<Array<Scalars['Time']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Time']['input']>;
  lte?: InputMaybe<Scalars['Time']['input']>;
  neq?: InputMaybe<Scalars['Time']['input']>;
};

/** Boolean expression comparing fields on type "UUID" */
export type UuidFilter = {
  eq?: InputMaybe<Scalars['UUID']['input']>;
  in?: InputMaybe<Array<Scalars['UUID']['input']>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<Scalars['UUID']['input']>;
};

export type UserData = Node & {
  __typename?: 'UserData';
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  userId: Scalars['String']['output'];
};

export type UserDataConnection = {
  __typename?: 'UserDataConnection';
  edges: Array<UserDataEdge>;
  pageInfo: PageInfo;
};

export type UserDataDeleteResponse = {
  __typename?: 'UserDataDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<UserData>;
};

export type UserDataEdge = {
  __typename?: 'UserDataEdge';
  cursor: Scalars['String']['output'];
  node: UserData;
};

export type UserDataFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<UserDataFilter>>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  image?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<UserDataFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<UserDataFilter>>;
  userId?: InputMaybe<StringFilter>;
};

export type UserDataInsertInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type UserDataInsertResponse = {
  __typename?: 'UserDataInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<UserData>;
};

export type UserDataOrderBy = {
  email?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  image?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  userId?: InputMaybe<OrderByDirection>;
};

export type UserDataUpdateInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type UserDataUpdateResponse = {
  __typename?: 'UserDataUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<UserData>;
};

export type SettingsPageQueryVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;


export type SettingsPageQuery = { __typename?: 'Query', userDataCollection?: { __typename?: 'UserDataConnection', edges: Array<{ __typename?: 'UserDataEdge', node: { __typename?: 'UserData', nodeId: string, name?: string | null, email?: string | null, image?: string | null, userId: string } }> } | null };

export type UserSettingFormMutationVariables = Exact<{
  nodeId: Scalars['ID']['input'];
  data: UserDataUpdateInput;
}>;


export type UserSettingFormMutation = { __typename?: 'Mutation', updateUserDataCollection: { __typename?: 'UserDataUpdateResponse', records: Array<{ __typename?: 'UserData', nodeId: string }> } };

export type LoginUserDataQueryVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;


export type LoginUserDataQuery = { __typename?: 'Query', userDataCollection?: { __typename?: 'UserDataConnection', edges: Array<{ __typename?: 'UserDataEdge', node: { __typename?: 'UserData', nodeId: string, id: string, name?: string | null, email?: string | null, image?: string | null, userId: string } }> } | null };


export const SettingsPageDocument = gql`
    query settingsPage($id: UUID!) {
  userDataCollection(filter: {id: {eq: $id}}) {
    edges {
      node {
        nodeId
        name
        email
        image
        userId
      }
    }
  }
}
    `;

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
 *      id: // value for 'id'
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
export const UserSettingFormDocument = gql`
    mutation UserSettingForm($nodeId: ID!, $data: UserDataUpdateInput!) {
  updateUserDataCollection(filter: {nodeId: {eq: $nodeId}}, set: $data) {
    records {
      nodeId
    }
  }
}
    `;
export type UserSettingFormMutationFn = Apollo.MutationFunction<UserSettingFormMutation, UserSettingFormMutationVariables>;

/**
 * __useUserSettingFormMutation__
 *
 * To run a mutation, you first call `useUserSettingFormMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserSettingFormMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userSettingFormMutation, { data, loading, error }] = useUserSettingFormMutation({
 *   variables: {
 *      nodeId: // value for 'nodeId'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUserSettingFormMutation(baseOptions?: Apollo.MutationHookOptions<UserSettingFormMutation, UserSettingFormMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UserSettingFormMutation, UserSettingFormMutationVariables>(UserSettingFormDocument, options);
      }
export type UserSettingFormMutationHookResult = ReturnType<typeof useUserSettingFormMutation>;
export type UserSettingFormMutationResult = Apollo.MutationResult<UserSettingFormMutation>;
export type UserSettingFormMutationOptions = Apollo.BaseMutationOptions<UserSettingFormMutation, UserSettingFormMutationVariables>;
export const LoginUserDataDocument = gql`
    query loginUserData($id: UUID!) {
  userDataCollection(filter: {id: {eq: $id}}) {
    edges {
      node {
        nodeId
        id
        name
        email
        image
        userId
      }
    }
  }
}
    `;

/**
 * __useLoginUserDataQuery__
 *
 * To run a query within a React component, call `useLoginUserDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useLoginUserDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLoginUserDataQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useLoginUserDataQuery(baseOptions: Apollo.QueryHookOptions<LoginUserDataQuery, LoginUserDataQueryVariables> & ({ variables: LoginUserDataQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LoginUserDataQuery, LoginUserDataQueryVariables>(LoginUserDataDocument, options);
      }
export function useLoginUserDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LoginUserDataQuery, LoginUserDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LoginUserDataQuery, LoginUserDataQueryVariables>(LoginUserDataDocument, options);
        }
export function useLoginUserDataSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<LoginUserDataQuery, LoginUserDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<LoginUserDataQuery, LoginUserDataQueryVariables>(LoginUserDataDocument, options);
        }
export type LoginUserDataQueryHookResult = ReturnType<typeof useLoginUserDataQuery>;
export type LoginUserDataLazyQueryHookResult = ReturnType<typeof useLoginUserDataLazyQuery>;
export type LoginUserDataSuspenseQueryHookResult = ReturnType<typeof useLoginUserDataSuspenseQuery>;
export type LoginUserDataQueryResult = Apollo.QueryResult<LoginUserDataQuery, LoginUserDataQueryVariables>;