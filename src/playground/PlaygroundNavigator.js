import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { PlaygroundScreen } from './PlaygroundScreen';
import { Button } from 'react-native';

const Stack = createStackNavigator();

export const PlaygroundNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Playground"
        component={PlaygroundScreen}
        options={({ navigation }) => ({
          title: 'Playground',
          headerLeft: null,
          headerRight: () => (
            <Button title="Close" onPress={() => navigation.goBack()} />
          ),
        })}
      />
    </Stack.Navigator>
  );
};
