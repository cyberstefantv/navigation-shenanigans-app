import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './HomeScreen';
import { PlaygroundScreen } from './playground';

const Stack = createStackNavigator();

export const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="Playground"
        component={PlaygroundScreen}
        options={{
          title: 'Playground',
        }}
      />
    </Stack.Navigator>
  );
};
