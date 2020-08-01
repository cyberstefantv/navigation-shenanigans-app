import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { FancyNavigator } from './FancyNavigator';
import { HomeNavigator } from './HomeNavigator';

const Stack = createStackNavigator();

export const RootNavigator = () => {
  return (
    <Stack.Navigator mode="modal" headerMode="none">
      <Stack.Screen name="HomeNavigator" component={HomeNavigator} />
      <Stack.Screen name="FancyNavigator" component={FancyNavigator} />
    </Stack.Navigator>
  );
};
