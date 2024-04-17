import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  GraphQLStringOrFloat: any;
  JSON: any;
};

export enum EventEnum {
  Create = 'create',
  Delete = 'delete',
  Update = 'update'
}

export type Mutation = {
  __typename?: 'Mutation';
  create_conversation_item?: Maybe<Conversation>;
  create_conversation_items: Array<Conversation>;
  create_messages_item?: Maybe<Messages>;
  create_messages_items: Array<Messages>;
  delete_conversation_item?: Maybe<Delete_One>;
  delete_conversation_items?: Maybe<Delete_Many>;
  delete_messages_item?: Maybe<Delete_One>;
  delete_messages_items?: Maybe<Delete_Many>;
  update_conversation_batch: Array<Conversation>;
  update_conversation_item?: Maybe<Conversation>;
  update_conversation_items: Array<Conversation>;
  update_messages_batch: Array<Messages>;
  update_messages_item?: Maybe<Messages>;
  update_messages_items: Array<Messages>;
};


export type MutationCreate_Conversation_ItemArgs = {
  data: Create_Conversation_Input;
};


export type MutationCreate_Conversation_ItemsArgs = {
  data?: InputMaybe<Array<Create_Conversation_Input>>;
  filter?: InputMaybe<Conversation_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationCreate_Messages_ItemArgs = {
  data: Create_Messages_Input;
};


export type MutationCreate_Messages_ItemsArgs = {
  data?: InputMaybe<Array<Create_Messages_Input>>;
  filter?: InputMaybe<Messages_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationDelete_Conversation_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Conversation_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDelete_Messages_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Messages_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationUpdate_Conversation_BatchArgs = {
  data?: InputMaybe<Array<Update_Conversation_Input>>;
  filter?: InputMaybe<Conversation_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Conversation_ItemArgs = {
  data: Update_Conversation_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Conversation_ItemsArgs = {
  data: Update_Conversation_Input;
  filter?: InputMaybe<Conversation_Filter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Messages_BatchArgs = {
  data?: InputMaybe<Array<Update_Messages_Input>>;
  filter?: InputMaybe<Messages_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Messages_ItemArgs = {
  data: Update_Messages_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Messages_ItemsArgs = {
  data: Update_Messages_Input;
  filter?: InputMaybe<Messages_Filter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Query = {
  __typename?: 'Query';
  conversation: Array<Conversation>;
  conversation_aggregated: Array<Conversation_Aggregated>;
  conversation_by_id?: Maybe<Conversation>;
  conversation_by_version?: Maybe<Version_Conversation>;
  messages: Array<Messages>;
  messages_aggregated: Array<Messages_Aggregated>;
  messages_by_id?: Maybe<Messages>;
  messages_by_version?: Maybe<Version_Messages>;
};


export type QueryConversationArgs = {
  filter?: InputMaybe<Conversation_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryConversation_AggregatedArgs = {
  filter?: InputMaybe<Conversation_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryConversation_By_IdArgs = {
  id: Scalars['ID'];
  version?: InputMaybe<Scalars['String']>;
};


export type QueryConversation_By_VersionArgs = {
  id: Scalars['ID'];
  version: Scalars['String'];
};


export type QueryMessagesArgs = {
  filter?: InputMaybe<Messages_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryMessages_AggregatedArgs = {
  filter?: InputMaybe<Messages_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryMessages_By_IdArgs = {
  id: Scalars['ID'];
  version?: InputMaybe<Scalars['String']>;
};


export type QueryMessages_By_VersionArgs = {
  id: Scalars['ID'];
  version: Scalars['String'];
};

export type Subscription = {
  __typename?: 'Subscription';
  conversation_mutated?: Maybe<Conversation_Mutated>;
  messages_mutated?: Maybe<Messages_Mutated>;
};


export type SubscriptionConversation_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionMessages_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};

export type Conversation = {
  __typename?: 'conversation';
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID'];
  messages?: Maybe<Array<Maybe<Messages>>>;
  messages_func?: Maybe<Count_Functions>;
  status?: Maybe<Scalars['String']>;
  user_created?: Maybe<Scalars['String']>;
  user_updated?: Maybe<Scalars['String']>;
};


export type ConversationMessagesArgs = {
  filter?: InputMaybe<Messages_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Conversation_Aggregated = {
  __typename?: 'conversation_aggregated';
  avg?: Maybe<Conversation_Aggregated_Fields>;
  avgDistinct?: Maybe<Conversation_Aggregated_Fields>;
  count?: Maybe<Conversation_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Conversation_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Conversation_Aggregated_Fields>;
  min?: Maybe<Conversation_Aggregated_Fields>;
  sum?: Maybe<Conversation_Aggregated_Fields>;
  sumDistinct?: Maybe<Conversation_Aggregated_Fields>;
};

export type Conversation_Aggregated_Count = {
  __typename?: 'conversation_aggregated_count';
  date_updated?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  messages?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  user_created?: Maybe<Scalars['Int']>;
  user_updated?: Maybe<Scalars['Int']>;
};

export type Conversation_Aggregated_Fields = {
  __typename?: 'conversation_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Conversation_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Conversation_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Conversation_Filter>>>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  messages?: InputMaybe<Messages_Filter>;
  messages_func?: InputMaybe<Count_Function_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<String_Filter_Operators>;
};

export type Conversation_Mutated = {
  __typename?: 'conversation_mutated';
  data?: Maybe<Conversation>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID'];
};

export type Count_Function_Filter_Operators = {
  count?: InputMaybe<Number_Filter_Operators>;
};

export type Count_Functions = {
  __typename?: 'count_functions';
  count?: Maybe<Scalars['Int']>;
};

export type Create_Conversation_Input = {
  date_updated?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['ID']>;
  messages?: InputMaybe<Array<InputMaybe<Create_Messages_Input>>>;
  status?: InputMaybe<Scalars['String']>;
  user_created?: InputMaybe<Scalars['String']>;
  user_updated?: InputMaybe<Scalars['String']>;
};

export type Create_Messages_Input = {
  centent?: InputMaybe<Scalars['String']>;
  conversation?: InputMaybe<Create_Conversation_Input>;
  date_created?: InputMaybe<Scalars['Date']>;
  date_updated?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['ID']>;
  status?: InputMaybe<Scalars['String']>;
  user_created?: InputMaybe<Scalars['String']>;
  user_updated?: InputMaybe<Scalars['String']>;
};

export type Date_Filter_Operators = {
  _between?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _nbetween?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  _neq?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _null?: InputMaybe<Scalars['Boolean']>;
};

export type Datetime_Function_Filter_Operators = {
  day?: InputMaybe<Number_Filter_Operators>;
  hour?: InputMaybe<Number_Filter_Operators>;
  minute?: InputMaybe<Number_Filter_Operators>;
  month?: InputMaybe<Number_Filter_Operators>;
  second?: InputMaybe<Number_Filter_Operators>;
  week?: InputMaybe<Number_Filter_Operators>;
  weekday?: InputMaybe<Number_Filter_Operators>;
  year?: InputMaybe<Number_Filter_Operators>;
};

export type Datetime_Functions = {
  __typename?: 'datetime_functions';
  day?: Maybe<Scalars['Int']>;
  hour?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  week?: Maybe<Scalars['Int']>;
  weekday?: Maybe<Scalars['Int']>;
  year?: Maybe<Scalars['Int']>;
};

export type Delete_Many = {
  __typename?: 'delete_many';
  ids: Array<Maybe<Scalars['ID']>>;
};

export type Delete_One = {
  __typename?: 'delete_one';
  id: Scalars['ID'];
};

export type Messages = {
  __typename?: 'messages';
  centent?: Maybe<Scalars['String']>;
  conversation?: Maybe<Conversation>;
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID'];
  status?: Maybe<Scalars['String']>;
  user_created?: Maybe<Scalars['String']>;
  user_updated?: Maybe<Scalars['String']>;
};


export type MessagesConversationArgs = {
  filter?: InputMaybe<Conversation_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Messages_Aggregated = {
  __typename?: 'messages_aggregated';
  avg?: Maybe<Messages_Aggregated_Fields>;
  avgDistinct?: Maybe<Messages_Aggregated_Fields>;
  count?: Maybe<Messages_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Messages_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Messages_Aggregated_Fields>;
  min?: Maybe<Messages_Aggregated_Fields>;
  sum?: Maybe<Messages_Aggregated_Fields>;
  sumDistinct?: Maybe<Messages_Aggregated_Fields>;
};

export type Messages_Aggregated_Count = {
  __typename?: 'messages_aggregated_count';
  centent?: Maybe<Scalars['Int']>;
  conversation?: Maybe<Scalars['Int']>;
  date_created?: Maybe<Scalars['Int']>;
  date_updated?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  user_created?: Maybe<Scalars['Int']>;
  user_updated?: Maybe<Scalars['Int']>;
};

export type Messages_Aggregated_Fields = {
  __typename?: 'messages_aggregated_fields';
  conversation?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Messages_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Messages_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Messages_Filter>>>;
  centent?: InputMaybe<String_Filter_Operators>;
  conversation?: InputMaybe<Conversation_Filter>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<String_Filter_Operators>;
};

export type Messages_Mutated = {
  __typename?: 'messages_mutated';
  data?: Maybe<Messages>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID'];
};

export type Number_Filter_Operators = {
  _between?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  _eq?: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  _gt?: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  _gte?: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  _lt?: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  _lte?: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  _nbetween?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  _neq?: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _null?: InputMaybe<Scalars['Boolean']>;
};

export type String_Filter_Operators = {
  _contains?: InputMaybe<Scalars['String']>;
  _empty?: InputMaybe<Scalars['Boolean']>;
  _ends_with?: InputMaybe<Scalars['String']>;
  _eq?: InputMaybe<Scalars['String']>;
  _icontains?: InputMaybe<Scalars['String']>;
  _iends_with?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _istarts_with?: InputMaybe<Scalars['String']>;
  _ncontains?: InputMaybe<Scalars['String']>;
  _nempty?: InputMaybe<Scalars['Boolean']>;
  _nends_with?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  _niends_with?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _nistarts_with?: InputMaybe<Scalars['String']>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _nstarts_with?: InputMaybe<Scalars['String']>;
  _null?: InputMaybe<Scalars['Boolean']>;
  _starts_with?: InputMaybe<Scalars['String']>;
};

export type Update_Conversation_Input = {
  date_updated?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['ID']>;
  messages?: InputMaybe<Array<InputMaybe<Update_Messages_Input>>>;
  status?: InputMaybe<Scalars['String']>;
  user_created?: InputMaybe<Scalars['String']>;
  user_updated?: InputMaybe<Scalars['String']>;
};

export type Update_Messages_Input = {
  centent?: InputMaybe<Scalars['String']>;
  conversation?: InputMaybe<Update_Conversation_Input>;
  date_created?: InputMaybe<Scalars['Date']>;
  date_updated?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['ID']>;
  status?: InputMaybe<Scalars['String']>;
  user_created?: InputMaybe<Scalars['String']>;
  user_updated?: InputMaybe<Scalars['String']>;
};

export type Version_Conversation = {
  __typename?: 'version_conversation';
  date_updated?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['ID']>;
  messages?: Maybe<Scalars['JSON']>;
  status?: Maybe<Scalars['String']>;
  user_created?: Maybe<Scalars['String']>;
  user_updated?: Maybe<Scalars['String']>;
};

export type Version_Messages = {
  __typename?: 'version_messages';
  centent?: Maybe<Scalars['String']>;
  conversation?: Maybe<Scalars['JSON']>;
  date_created?: Maybe<Scalars['Date']>;
  date_updated?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['ID']>;
  status?: Maybe<Scalars['String']>;
  user_created?: Maybe<Scalars['String']>;
  user_updated?: Maybe<Scalars['String']>;
};

export type ConversationsQueryVariables = Exact<{ [key: string]: never; }>;


export type ConversationsQuery = { __typename?: 'Query', conversation: Array<{ __typename?: 'conversation', id: string, status?: string | null }> };

export type ConversationAddedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type ConversationAddedSubscription = { __typename?: 'Subscription', conversation_mutated?: { __typename?: 'conversation_mutated', data?: { __typename?: 'conversation', id: string } | null } | null };


export const ConversationsDocument = gql`
    query conversations {
  conversation {
    id
    status
  }
}
    `;

/**
 * __useConversationsQuery__
 *
 * To run a query within a React component, call `useConversationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useConversationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useConversationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useConversationsQuery(baseOptions?: Apollo.QueryHookOptions<ConversationsQuery, ConversationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ConversationsQuery, ConversationsQueryVariables>(ConversationsDocument, options);
      }
export function useConversationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ConversationsQuery, ConversationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ConversationsQuery, ConversationsQueryVariables>(ConversationsDocument, options);
        }
export type ConversationsQueryHookResult = ReturnType<typeof useConversationsQuery>;
export type ConversationsLazyQueryHookResult = ReturnType<typeof useConversationsLazyQuery>;
export type ConversationsQueryResult = Apollo.QueryResult<ConversationsQuery, ConversationsQueryVariables>;
export const ConversationAddedDocument = gql`
    subscription conversationAdded {
  conversation_mutated {
    data {
      id
    }
  }
}
    `;

/**
 * __useConversationAddedSubscription__
 *
 * To run a query within a React component, call `useConversationAddedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useConversationAddedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useConversationAddedSubscription({
 *   variables: {
 *   },
 * });
 */
export function useConversationAddedSubscription(baseOptions?: Apollo.SubscriptionHookOptions<ConversationAddedSubscription, ConversationAddedSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<ConversationAddedSubscription, ConversationAddedSubscriptionVariables>(ConversationAddedDocument, options);
      }
export type ConversationAddedSubscriptionHookResult = ReturnType<typeof useConversationAddedSubscription>;
export type ConversationAddedSubscriptionResult = Apollo.SubscriptionResult<ConversationAddedSubscription>;