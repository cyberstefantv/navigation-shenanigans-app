import React from 'react';
import { ScrollView, Button } from 'react-native';

export const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <Button
        title="Open the fancy screen"
        onPress={() => {
          navigation.navigate('FancyNavigator');
        }}
      />
      <Button
        title="Do stuff"
        onPress={() => {
          console.warn('Stuff!');
        }}
      />
    </ScrollView>
  );
};
