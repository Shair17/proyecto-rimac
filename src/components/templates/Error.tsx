import React from 'react';
import {APP_COLORS} from '@rimac/theme/colors';
import {View, Text, StyleSheet} from 'react-native';

export const Error = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.error_text}>Ocurrió un error inesperado.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: APP_COLORS.BACKGROUND_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
  error_text: {
    color: '#141938',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 28,
    letterSpacing: 0.1,
  },
});
