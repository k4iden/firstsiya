import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import homescreen from './homescreen';
import dashboard from './dashboard';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="homescreen">
        <Stack.Screen name="homescreen" component={homescreen} options={{ title: 'homescreen' }} />
        <Stack.Screen name="dashboard" component={dashboard} options={{ title: 'dashboard' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
