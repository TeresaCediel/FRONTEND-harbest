import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import colors from '../../styles/colors';

export default function ScreenContainer({ children }) {
  return (
    <View style={styles.outer}>
      <View style={styles.inner}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 50 : 40,
  },
  inner: {
    flex: 1,
    width: '100%',
    maxWidth: Platform.OS === 'web' ? 390 : '100%',
    backgroundColor: colors.background,
    overflow: 'hidden',
  },
});