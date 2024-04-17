import {
  ApolloClient,
  InMemoryCache,
  from,
  HttpLink,
  ApolloLink,
} from '@apollo/client';
import {onError} from '@apollo/client/link/error';

//import {getEnvironement} from './environement';
import {DeviceEventEmitter} from 'react-native';
//import {showError} from '../hooks/useConfirm';

const getApolloClient = (token: string) => {
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
    if (networkError) console.log(`[Network error]: ${networkError}`);
  });

  const httpLink = new HttpLink({uri: 'http://192.168.1.38:8055/graphql'});
  const authMiddleware = new ApolloLink((operation, forward) => {
    // add the authorization to the headers
    operation.setContext({
      headers: {
        //authorization: token ? `Bearer ${token}` : '',
      },
    });
    return forward(operation);
  });
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: from([authMiddleware, errorLink, httpLink]),
    name: 'UB',
    version: '1.0',
  });
  return client;
};

export default getApolloClient;
