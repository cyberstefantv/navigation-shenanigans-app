import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { FancyScreen } from './FancyScreen';

const Stack = createStackNavigator();

export const FancyNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Fancy" component={FancyScreen} />
    </Stack.Navigator>
  );
};
