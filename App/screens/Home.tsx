import {Text, View} from 'react-native';
import React from 'react';
import mainStyles from '../styles/styles';
import {useConversationsQuery} from '../../src/generated/graphqlTypes';

const Home: React.FC = () => {
  const data = useConversationsQuery();

  return (
    <View style={mainStyles.container}>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
