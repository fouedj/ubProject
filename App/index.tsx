import React from 'react';
import AppContainer from './navigation/AppNavigation';
import {View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {ApolloProvider} from '@apollo/client';
import getApolloClient from './config/apollo-client';
const App = () => {
  return (
    <React.Fragment>
      <ApolloProvider client={getApolloClient('')}>
        <AppContainer />
      </ApolloProvider>
    </React.Fragment>
  );
};
export default App;
