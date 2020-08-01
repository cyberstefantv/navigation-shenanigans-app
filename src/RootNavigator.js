import React from 'react';
import {
  createStackNavigator,
  TransitionSpecs,
  TransitionPresets,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import { FancyNavigator } from './FancyNavigator';
import { HomeNavigator } from './HomeNavigator';

const Stack = createStackNavigator();

export const RootNavigator = () => {
  return (
    <Stack.Navigator mode="modal" headerMode="none">
      <Stack.Screen name="HomeNavigator" component={HomeNavigator} />
      <Stack.Screen name="FancyNavigator" component={FancyNavigator} />
      <Stack.Screen
        name="FancyNavigatorWithModalPresentationIOS"
        component={FancyNavigator}
        options={{
          // transitionSpec: {
          //   open: TransitionSpecs.TransitionIOSSpec,
          //   close: TransitionSpecs.TransitionIOSSpec,
          // },
          // cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
          ...TransitionPresets.ModalPresentationIOS,
        }}
      />
      <Stack.Screen
        name="FancyNavigatorWithCustom"
        component={FancyNavigator}
        options={{
          cardStyleInterpolator:
            CardStyleInterpolators.forFadeFromBottomAndroid,
        }}
      />
    </Stack.Navigator>
  );
};
