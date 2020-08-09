import React, { useRef, useState } from 'react';
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
  // We are now driving scrollX from the ScrollView.
  const scrollX = useRef(new Animated.Value(0));

  return (
    <Animated.ScrollView
      contentContainerStyle={styles.container}
      onScroll={Animated.event(
        // scrollX = e.nativeEvent.contentOffset.x
        [
          {
            nativeEvent: {
              contentOffset: {
                x: scrollX.current,
              },
            },
          },
        ],
        { useNativeDriver: true },
      )}>
      <FadingView />
    </Animated.ScrollView>
  );
};
