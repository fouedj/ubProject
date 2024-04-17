
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {
  SafeAreaView,
  View,
} from 'react-native';
import BottomTab from './BottomTab';
const App = createNativeStackNavigator();
export const AppContainer = ({navigation}:  any) => {
return (
   
        <NavigationContainer>
        <App.Navigator >
        <App.Screen name="BottomTab" component={BottomTab} options={{headerShown:false}} />
          </App.Navigator>
          </NavigationContainer>
 
  );
}



export default AppContainer;
