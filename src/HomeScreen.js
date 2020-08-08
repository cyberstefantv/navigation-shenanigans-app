import React from 'react';
import { ScrollView, Button } from 'react-native';

export const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <Button
        title="Playground >"
        onPress={() => {
          navigation.navigate('PlaygroundNavigator');
        }}
      />
      <Button
        title="Fancy screen with default style"
        onPress={() => {
          navigation.navigate('FancyNavigator');
        }}
      />
      <Button
        title="Fancy screen with iOS13 modal style"
        onPress={() => {
          navigation.navigate('FancyNavigatorWithModalPresentationIOS');
        }}
      />
      <Button
        title="Fancy screen with custom style"
        onPress={() => {
          navigation.navigate('FancyNavigatorWithCustom');
        }}
      />
    </ScrollView>
  );
};
