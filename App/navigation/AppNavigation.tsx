import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import BottomTab from './BottomTab';
import SignUpScreen from '../screens/signup';
import {ChatRoom} from '../components';
const App = createNativeStackNavigator();
export const AppContainer = ({navigation}: any) => {
  return (
    <NavigationContainer>
      <App.Navigator>
        <App.Screen
          name="login"
          component={SignUpScreen}
          options={{
            title: 'Connexion',
            headerTitleAlign: 'center',
          }}
        />
        <App.Screen
          name="BottomTab"
          component={BottomTab}
          options={{headerShown: false}}
        />
        <App.Screen
          name="ChatRoom"
          component={ChatRoom}
          options={{headerShown: true, title: 'Chat'}}
        />
      </App.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;
