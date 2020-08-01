import React from 'react';
import { ScrollView, Button } from 'react-native';

export const HomeScreen = () => {
  return (
    <ScrollView>
      <Button
        title="Do stuff"
        onPress={() => {
          console.warn('Stuff!');
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
