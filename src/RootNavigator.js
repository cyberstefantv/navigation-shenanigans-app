import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './HomeScreen';
import { FancyNavigator } from './FancyNavigator';

const Stack = createStackNavigator();

export const RootNavigator = () => {
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="FancyNavigator" component={FancyNavigator} />
    </Stack.Navigator>
  );
};
