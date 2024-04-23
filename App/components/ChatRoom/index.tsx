import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import mainStyles from '../../styles/styles';
import {GiftedChat, IMessage} from 'react-native-gifted-chat';
import Network from '../../api/network';
import UserState from '../../atoms';
import {useRoute} from '@react-navigation/native';
import {SERVER_URL} from '../../config/constants';
const qs = require('qs');
const {io} = require('socket.io-client');
const ChatRoom = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const user: any = UserState.useGetCurrenUser();
  const route: any = useRoute();
  const query = qs.stringify(
    {
      filters: {
        conversation: {
          id: {
            $eq: route?.params?.item?.id,
          },
        },
      },
    },
    {
      encodeValuesOnly: true,
    },
  );
  const adaptMessageToGift = (msg: any, user: any) => {
    return {
      _id: msg?.id,
      text: msg?.attributes?.content,
      createdAt: msg?.attributes?.createdAt,
      user: {_id: msg?.attributes?.sender?.data?.id},
    };
  };
  const loadMessages = () => {
    Network(user?.token)
      .get(
        `messages?populate=sender.name,receiver.name&${query}&sort[0]=createdAt:desc`,
      )
      .then(response => {
        const messgs = response?.data?.data?.map(msg => {
          return adaptMessageToGift(msg, user);
        });

        setMessages(messgs);
      });
  };
  React.useEffect(() => {
    loadMessages();
    const socket = io(SERVER_URL, {
      auth: {
        strategy: 'jwt',
        token: user.token,
      },
    });
    socket.on('connect', () => {
      socket.on('message:create', (msg: any) => {
        loadMessages();
      });
    });
    return () => {
      socket.disconnect();
    };
  }, []);
  const onSend = useCallback((newMessages: IMessage[]) => {
    Network(user?.token)
      .post('messages', {
        data: {
          content: newMessages[0].text,
          conversation: route?.params?.item?.id,
          sender: newMessages[0].user?._id,
          receiver: route?.params?.item?.attributes?.receiver?.data?.id,
          published: new Date().toLocaleDateString(),
        },
      })
      .then(() => {});
  }, []);
  return (
    <SafeAreaView style={mainStyles.container}>
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: user?.id?.id,
        }}
      />
    </SafeAreaView>
  );
};

export default ChatRoom;

const styles = StyleSheet.create({});
