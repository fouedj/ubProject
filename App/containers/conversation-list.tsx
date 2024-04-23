import React from 'react';
import {View, Text, FlatList, StyleSheet, Pressable} from 'react-native';
import {Conversations} from '../../src/generated/graphqlTypes';
import {useNavigation} from '@react-navigation/native';

const ConversationList = ({
  conversations,
}: {
  conversations: Conversations[];
}) => {
  const navigation: any = useNavigation();
  const onPress = (item: Conversations) => {
    navigation.navigate('ChatRoom', {item: item});
  };

  const renderItem = ({item}: {item: any}) => (
    <Pressable onPress={() => onPress(item)}>
      <View style={styles.item}>
        <Text style={styles.name}>
          {item.attributes?.sender?.data?.attributes?.username}
        </Text>
        {/* <Text style={styles.lastMessage}>{item.id}</Text> */}
        <Text style={styles.time}>{item.attributes?.createdAt}</Text>
      </View>
    </Pressable>
  );

  return (
    <FlatList
      data={conversations?.data}
      renderItem={renderItem}
      keyExtractor={item => item?.id?.toString()}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  lastMessage: {
    fontSize: 16,
    color: '#555',
  },
  time: {
    fontSize: 12,
    color: '#888',
    marginTop: 5,
  },
});

export default ConversationList;
