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
  create_conversations_item?: Maybe<Conversations>;
  create_conversations_items: Array<Conversations>;
  create_messages_item?: Maybe<Messages>;
  create_messages_items: Array<Messages>;
  create_users_item?: Maybe<Users>;
  create_users_items: Array<Users>;
  delete_conversations_item?: Maybe<Delete_One>;
  delete_conversations_items?: Maybe<Delete_Many>;
  delete_messages_item?: Maybe<Delete_One>;
  delete_messages_items?: Maybe<Delete_Many>;
  delete_users_item?: Maybe<Delete_One>;
  delete_users_items?: Maybe<Delete_Many>;
  update_conversations_batch: Array<Conversations>;
  update_conversations_item?: Maybe<Conversations>;
  update_conversations_items: Array<Conversations>;
  update_messages_batch: Array<Messages>;
  update_messages_item?: Maybe<Messages>;
  update_messages_items: Array<Messages>;
  update_users_batch: Array<Users>;
  update_users_item?: Maybe<Users>;
  update_users_items: Array<Users>;
};


export type MutationCreate_Conversations_ItemArgs = {
  data: Create_Conversations_Input;
};


export type MutationCreate_Conversations_ItemsArgs = {
  data?: InputMaybe<Array<Create_Conversations_Input>>;
  filter?: InputMaybe<Conversations_Filter>;
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


export type MutationCreate_Users_ItemArgs = {
  data: Create_Users_Input;
};


export type MutationCreate_Users_ItemsArgs = {
  data?: InputMaybe<Array<Create_Users_Input>>;
  filter?: InputMaybe<Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationDelete_Conversations_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Conversations_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDelete_Messages_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Messages_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDelete_Users_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Users_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationUpdate_Conversations_BatchArgs = {
  data?: InputMaybe<Array<Update_Conversations_Input>>;
  filter?: InputMaybe<Conversations_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Conversations_ItemArgs = {
  data: Update_Conversations_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Conversations_ItemsArgs = {
  data: Update_Conversations_Input;
  filter?: InputMaybe<Conversations_Filter>;
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


export type MutationUpdate_Users_BatchArgs = {
  data?: InputMaybe<Array<Update_Users_Input>>;
  filter?: InputMaybe<Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Users_ItemArgs = {
  data: Update_Users_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Users_ItemsArgs = {
  data: Update_Users_Input;
  filter?: InputMaybe<Users_Filter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Query = {
  __typename?: 'Query';
  conversations: Array<Conversations>;
  conversations_aggregated: Array<Conversations_Aggregated>;
  conversations_by_id?: Maybe<Conversations>;
  conversations_by_version?: Maybe<Version_Conversations>;
  messages: Array<Messages>;
  messages_aggregated: Array<Messages_Aggregated>;
  messages_by_id?: Maybe<Messages>;
  messages_by_version?: Maybe<Version_Messages>;
  users: Array<Users>;
  users_aggregated: Array<Users_Aggregated>;
  users_by_id?: Maybe<Users>;
  users_by_version?: Maybe<Version_Users>;
};


export type QueryConversationsArgs = {
  filter?: InputMaybe<Conversations_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryConversations_AggregatedArgs = {
  filter?: InputMaybe<Conversations_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryConversations_By_IdArgs = {
  id: Scalars['ID'];
  version?: InputMaybe<Scalars['String']>;
};


export type QueryConversations_By_VersionArgs = {
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


export type QueryUsersArgs = {
  filter?: InputMaybe<Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsers_AggregatedArgs = {
  filter?: InputMaybe<Users_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsers_By_IdArgs = {
  id: Scalars['ID'];
  version?: InputMaybe<Scalars['String']>;
};


export type QueryUsers_By_VersionArgs = {
  id: Scalars['ID'];
  version: Scalars['String'];
};

export type Subscription = {
  __typename?: 'Subscription';
  conversations_mutated?: Maybe<Conversations_Mutated>;
  messages_mutated?: Maybe<Messages_Mutated>;
  users_mutated?: Maybe<Users_Mutated>;
};


export type SubscriptionConversations_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionMessages_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionUsers_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};

export type Conversations = {
  __typename?: 'conversations';
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID'];
  receiver?: Maybe<Scalars['String']>;
  receiverName?: Maybe<Scalars['String']>;
  sender?: Maybe<Scalars['String']>;
  senderName?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  user_created?: Maybe<Scalars['String']>;
  user_updated?: Maybe<Scalars['String']>;
};

export type Conversations_Aggregated = {
  __typename?: 'conversations_aggregated';
  avg?: Maybe<Conversations_Aggregated_Fields>;
  avgDistinct?: Maybe<Conversations_Aggregated_Fields>;
  count?: Maybe<Conversations_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Conversations_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Conversations_Aggregated_Fields>;
  min?: Maybe<Conversations_Aggregated_Fields>;
  sum?: Maybe<Conversations_Aggregated_Fields>;
  sumDistinct?: Maybe<Conversations_Aggregated_Fields>;
};

export type Conversations_Aggregated_Count = {
  __typename?: 'conversations_aggregated_count';
  date_created?: Maybe<Scalars['Int']>;
  date_updated?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  receiver?: Maybe<Scalars['Int']>;
  receiverName?: Maybe<Scalars['Int']>;
  sender?: Maybe<Scalars['Int']>;
  senderName?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  user_created?: Maybe<Scalars['Int']>;
  user_updated?: Maybe<Scalars['Int']>;
};

export type Conversations_Aggregated_Fields = {
  __typename?: 'conversations_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Conversations_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Conversations_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Conversations_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  receiver?: InputMaybe<String_Filter_Operators>;
  receiverName?: InputMaybe<String_Filter_Operators>;
  sender?: InputMaybe<String_Filter_Operators>;
  senderName?: InputMaybe<String_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<String_Filter_Operators>;
};

export type Conversations_Mutated = {
  __typename?: 'conversations_mutated';
  data?: Maybe<Conversations>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID'];
};

export type Create_Conversations_Input = {
  date_created?: InputMaybe<Scalars['Date']>;
  date_updated?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['ID']>;
  receiver?: InputMaybe<Scalars['String']>;
  receiverName?: InputMaybe<Scalars['String']>;
  sender?: InputMaybe<Scalars['String']>;
  senderName?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  user_created?: InputMaybe<Scalars['String']>;
  user_updated?: InputMaybe<Scalars['String']>;
};

export type Create_Messages_Input = {
  content?: InputMaybe<Scalars['String']>;
  conversation?: InputMaybe<Create_Conversations_Input>;
  date_created?: InputMaybe<Scalars['Date']>;
  date_updated?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['ID']>;
  sender?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  user_created?: InputMaybe<Scalars['String']>;
  user_updated?: InputMaybe<Scalars['String']>;
};

export type Create_Users_Input = {
  avatar?: InputMaybe<Scalars['String']>;
  date_created?: InputMaybe<Scalars['Date']>;
  date_updated?: InputMaybe<Scalars['Date']>;
  firstname?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  lastname?: InputMaybe<Scalars['String']>;
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
  content?: Maybe<Scalars['String']>;
  conversation?: Maybe<Conversations>;
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID'];
  sender?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  user_created?: Maybe<Scalars['String']>;
  user_updated?: Maybe<Scalars['String']>;
};


export type MessagesConversationArgs = {
  filter?: InputMaybe<Conversations_Filter>;
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
  content?: Maybe<Scalars['Int']>;
  conversation?: Maybe<Scalars['Int']>;
  date_created?: Maybe<Scalars['Int']>;
  date_updated?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  sender?: Maybe<Scalars['Int']>;
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
  content?: InputMaybe<String_Filter_Operators>;
  conversation?: InputMaybe<Conversations_Filter>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  sender?: InputMaybe<String_Filter_Operators>;
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

export type Update_Conversations_Input = {
  date_created?: InputMaybe<Scalars['Date']>;
  date_updated?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['ID']>;
  receiver?: InputMaybe<Scalars['String']>;
  receiverName?: InputMaybe<Scalars['String']>;
  sender?: InputMaybe<Scalars['String']>;
  senderName?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  user_created?: InputMaybe<Scalars['String']>;
  user_updated?: InputMaybe<Scalars['String']>;
};

export type Update_Messages_Input = {
  content?: InputMaybe<Scalars['String']>;
  conversation?: InputMaybe<Update_Conversations_Input>;
  date_created?: InputMaybe<Scalars['Date']>;
  date_updated?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['ID']>;
  sender?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  user_created?: InputMaybe<Scalars['String']>;
  user_updated?: InputMaybe<Scalars['String']>;
};

export type Update_Users_Input = {
  avatar?: InputMaybe<Scalars['String']>;
  date_created?: InputMaybe<Scalars['Date']>;
  date_updated?: InputMaybe<Scalars['Date']>;
  firstname?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  lastname?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  user_created?: InputMaybe<Scalars['String']>;
  user_updated?: InputMaybe<Scalars['String']>;
};

export type Users = {
  __typename?: 'users';
  avatar?: Maybe<Scalars['String']>;
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  firstname?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastname?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  user_created?: Maybe<Scalars['String']>;
  user_updated?: Maybe<Scalars['String']>;
};

export type Users_Aggregated = {
  __typename?: 'users_aggregated';
  avg?: Maybe<Users_Aggregated_Fields>;
  avgDistinct?: Maybe<Users_Aggregated_Fields>;
  count?: Maybe<Users_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Users_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Users_Aggregated_Fields>;
  min?: Maybe<Users_Aggregated_Fields>;
  sum?: Maybe<Users_Aggregated_Fields>;
  sumDistinct?: Maybe<Users_Aggregated_Fields>;
};

export type Users_Aggregated_Count = {
  __typename?: 'users_aggregated_count';
  avatar?: Maybe<Scalars['Int']>;
  date_created?: Maybe<Scalars['Int']>;
  date_updated?: Maybe<Scalars['Int']>;
  firstname?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  lastname?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  user_created?: Maybe<Scalars['Int']>;
  user_updated?: Maybe<Scalars['Int']>;
};

export type Users_Aggregated_Fields = {
  __typename?: 'users_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Users_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Users_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Users_Filter>>>;
  avatar?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  firstname?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  lastname?: InputMaybe<String_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<String_Filter_Operators>;
};

export type Users_Mutated = {
  __typename?: 'users_mutated';
  data?: Maybe<Users>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID'];
};

export type Version_Conversations = {
  __typename?: 'version_conversations';
  date_created?: Maybe<Scalars['Date']>;
  date_updated?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['ID']>;
  receiver?: Maybe<Scalars['String']>;
  receiverName?: Maybe<Scalars['String']>;
  sender?: Maybe<Scalars['String']>;
  senderName?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  user_created?: Maybe<Scalars['String']>;
  user_updated?: Maybe<Scalars['String']>;
};

export type Version_Messages = {
  __typename?: 'version_messages';
  content?: Maybe<Scalars['String']>;
  conversation?: Maybe<Scalars['JSON']>;
  date_created?: Maybe<Scalars['Date']>;
  date_updated?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['ID']>;
  sender?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  user_created?: Maybe<Scalars['String']>;
  user_updated?: Maybe<Scalars['String']>;
};

export type Version_Users = {
  __typename?: 'version_users';
  avatar?: Maybe<Scalars['String']>;
  date_created?: Maybe<Scalars['Date']>;
  date_updated?: Maybe<Scalars['Date']>;
  firstname?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  lastname?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  user_created?: Maybe<Scalars['String']>;
  user_updated?: Maybe<Scalars['String']>;
};

export type ConversationsQueryVariables = Exact<{
  filter?: InputMaybe<Conversations_Filter>;
}>;


export type ConversationsQuery = { __typename?: 'Query', conversations: Array<{ __typename?: 'conversations', date_updated?: any | null, id: string, senderName?: string | null, receiverName?: string | null }> };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'users', id: string, firstname?: string | null, lastname?: string | null }> };

export type MessagesQueryVariables = Exact<{
  filter?: InputMaybe<Messages_Filter>;
}>;


export type MessagesQuery = { __typename?: 'Query', messages: Array<{ __typename?: 'messages', content?: string | null, id: string, conversation?: { __typename?: 'conversations', id: string, status?: string | null } | null }> };

export type ConversationAddedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type ConversationAddedSubscription = { __typename?: 'Subscription', conversations_mutated?: { __typename?: 'conversations_mutated', data?: { __typename?: 'conversations', id: string } | null } | null };

export type Create_Messages_ItemMutationVariables = Exact<{
  data: Create_Messages_Input;
}>;


export type Create_Messages_ItemMutation = { __typename?: 'Mutation', create_messages_item?: { __typename?: 'messages', id: string, status?: string | null, content?: string | null } | null };


export const ConversationsDocument = gql`
    query Conversations($filter: conversations_filter) {
  conversations(filter: $filter) {
    date_updated
    id
    senderName
    receiverName
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
 *      filter: // value for 'filter'
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
export const UsersDocument = gql`
    query users {
  users {
    id
    firstname
    lastname
  }
}
    `;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersQuery(baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
      }
export function useUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = Apollo.QueryResult<UsersQuery, UsersQueryVariables>;
export const MessagesDocument = gql`
    query Messages($filter: messages_filter) {
  messages(filter: $filter) {
    content
    id
    conversation {
      id
      status
    }
  }
}
    `;

/**
 * __useMessagesQuery__
 *
 * To run a query within a React component, call `useMessagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useMessagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMessagesQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useMessagesQuery(baseOptions?: Apollo.QueryHookOptions<MessagesQuery, MessagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MessagesQuery, MessagesQueryVariables>(MessagesDocument, options);
      }
export function useMessagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MessagesQuery, MessagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MessagesQuery, MessagesQueryVariables>(MessagesDocument, options);
        }
export type MessagesQueryHookResult = ReturnType<typeof useMessagesQuery>;
export type MessagesLazyQueryHookResult = ReturnType<typeof useMessagesLazyQuery>;
export type MessagesQueryResult = Apollo.QueryResult<MessagesQuery, MessagesQueryVariables>;
export const ConversationAddedDocument = gql`
    subscription conversationAdded {
  conversations_mutated {
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
export const Create_Messages_ItemDocument = gql`
    mutation Create_messages_item($data: create_messages_input!) {
  create_messages_item(data: $data) {
    id
    status
    content
  }
}
    `;
export type Create_Messages_ItemMutationFn = Apollo.MutationFunction<Create_Messages_ItemMutation, Create_Messages_ItemMutationVariables>;

/**
 * __useCreate_Messages_ItemMutation__
 *
 * To run a mutation, you first call `useCreate_Messages_ItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreate_Messages_ItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMessagesItemMutation, { data, loading, error }] = useCreate_Messages_ItemMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreate_Messages_ItemMutation(baseOptions?: Apollo.MutationHookOptions<Create_Messages_ItemMutation, Create_Messages_ItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Create_Messages_ItemMutation, Create_Messages_ItemMutationVariables>(Create_Messages_ItemDocument, options);
      }
export type Create_Messages_ItemMutationHookResult = ReturnType<typeof useCreate_Messages_ItemMutation>;
export type Create_Messages_ItemMutationResult = Apollo.MutationResult<Create_Messages_ItemMutation>;
export type Create_Messages_ItemMutationOptions = Apollo.BaseMutationOptions<Create_Messages_ItemMutation, Create_Messages_ItemMutationVariables>;