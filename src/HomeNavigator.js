import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './HomeScreen';

const Stack = createStackNavigator();

export const HomeNavigator = () => {
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};
