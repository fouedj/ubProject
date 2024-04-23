import React, {useCallback, useState} from 'react';
import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import {GiftedChat, IMessage} from 'react-native-gifted-chat';
import mainStyles from '../styles/styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation, useRoute} from '@react-navigation/native';
import UserState from '../atoms';
import Network from '../api/network';
import {Conversations} from '../../src/generated/graphqlTypes';
import {ConversationList} from '../containers';

// URL to your strapi instance

const Chat: React.FC = ({}) => {
  const user: any = UserState.useGetCurrenUser();
  const [conversations, setConversations] = useState([]);
  React.useEffect(() => {
    Network(user?.token)
      .get('conversations?populate=sender.name,receiver.name')
      .then((data: any) => {
        setConversations(data?.data);
      });
  }, []);
  return (
    <SafeAreaView style={mainStyles.container}>
      <View style={mainStyles.content}>
        <ConversationList conversations={conversations} />
      </View>
    </SafeAreaView>
  );
};
export default Chat;
