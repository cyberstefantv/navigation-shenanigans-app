import React from 'react';
import { ScrollView, Button } from 'react-native';

export const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <Button
        title="Drill into Playground"
        onPress={() => {
          navigation.navigate('Playground');
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
