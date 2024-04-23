import React from 'react';
import AppContainer from './navigation/AppNavigation';
import {View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import 'react-native-url-polyfill/auto';

import {ApolloProvider} from '@apollo/client';
import getApolloClient from './config/apollo-client';
import {RecoilRoot} from 'recoil';
import UserState from './atoms';
import {DirectusProvider} from './context';
const App = () => {
  return (
    <React.Fragment>
      <RecoilRoot>
        <DirectusProvider>
          <Container />
        </DirectusProvider>
      </RecoilRoot>
    </React.Fragment>
  );
};

const Container = () => {
  const user = UserState.useGetCurrenUser();
  return (
    <ApolloProvider client={getApolloClient(user.token)}>
      <AppContainer />
    </ApolloProvider>
  );
};
export default App;
