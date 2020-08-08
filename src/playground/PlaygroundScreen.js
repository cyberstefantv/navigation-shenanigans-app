import React, { useRef } from 'react';
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  Button,
  Animated,
} from 'react-native';
import { FadingView } from './FadingView';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});

export const PlaygroundScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <FadingView />
    </ScrollView>
  );
};
