import {
  ApolloClient,
  InMemoryCache,
  from,
  HttpLink,
  ApolloLink,
  split,
} from '@apollo/client';
import {getMainDefinition} from '@apollo/client/utilities';
import {onError} from '@apollo/client/link/error';
import {GraphQLWsLink} from '@apollo/client/link/subscriptions';
import {createClient} from 'graphql-ws';
//import {getEnvironement} from './environement';
import {DeviceEventEmitter} from 'react-native';
//import {showError} from '../hooks/useConfirm';

const getApolloClient = (token: string | null = '') => {
  const errorLink = onError(({graphQLErrors, networkError}) => {
    if (graphQLErrors) {
      graphQLErrors.forEach(({message, locations, path}) => {
        // showError(message);
        if (message === 'ACCESS_DENIED') {
          DeviceEventEmitter.emit('event.logout');
        }
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
        );
      });
    }
    if (networkError) console.log(`[Network error]: ${networkError?.message}`);
  });

  const httpLink = new HttpLink({uri: 'http://192.168.1.157:8055/graphql'});
  const wsLink = new GraphQLWsLink(
    createClient({
      url: 'ws://192.168.1.157:8055/subscriptions',
    }),
  );
  const splitLink = split(
    ({query}) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
      );
    },
    wsLink,
    httpLink,
  );
  const authMiddleware = new ApolloLink((operation, forward) => {
    // add the authorization to the headers
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : '',
      },
    });
    return forward(operation);
  });
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: from([authMiddleware, errorLink, splitLink]),
    name: 'UB',
    version: '1.0',
  });
  return client;
};

export default getApolloClient;
