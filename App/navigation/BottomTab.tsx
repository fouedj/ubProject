import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import colors from '../styles/colors';
import {Platform, View} from 'react-native';
import mainStyles from '../styles/styles';
import {Account, Chat, Home, Search} from '../screens';
import {
  AccountIcon,
  ChatIcon,
  HomeIcon,
  SearchIcons,
} from '../components/icons';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{headerShown: true}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarTestID: 'filtersScreen',
          headerShown: true,
          title: 'Accueil',
          headerTitleAlign: 'center',
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: '#0C6EA5',
          tabBarIcon: ({focused}: any) => {
            return (
              <View style={{padding: 4}}>
                <HomeIcon focused={focused} />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarTestID: 'searchScreen',
          headerShown: true,
          title: 'Recherche',
          headerTitleAlign: 'center',
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: '#0C6EA5',
          tabBarIcon: ({focused}: any) => {
            return (
              <View style={{padding: 4}}>
                <SearchIcons focused={focused} />
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarTestID: 'chatScreen',
          headerShown: true,
          title: 'Chat',
          headerTitleAlign: 'center',
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: '#0C6EA5',
          tabBarIcon: ({focused}: any) => {
            return (
              <View style={{padding: 4}}>
                <ChatIcon focused={focused} />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="MyAccount"
        component={Account}
        options={{
          tabBarTestID: 'accountScreen',
          headerShown: true,
          title: 'Mon compte',
          headerTitleAlign: 'center',
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: '#0C6EA5',
          tabBarIcon: ({focused}: any) => {
            return (
              <View style={{padding: 4}}>
                <AccountIcon focused={focused} />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
