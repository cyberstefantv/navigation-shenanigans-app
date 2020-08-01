import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { FancyScreen } from './FancyScreen';
import { Button } from 'react-native';

const Stack = createStackNavigator();

export const FancyNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Fancy"
        component={FancyScreen}
        options={({ navigation }) => ({
          title: 'Fancy',
          headerLeft: null,
          headerRight: () => (
            <Button title="Close" onPress={() => navigation.goBack()} />
          ),
        })}
      />
    </Stack.Navigator>
  );
};
