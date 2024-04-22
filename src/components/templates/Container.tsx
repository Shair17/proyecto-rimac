import React from 'react';
import {View, StyleSheet, ViewProps} from 'react-native';

interface Props extends ViewProps {}

export const Container: React.FC<Props> = ({children, style, ...props}) => {
  return (
    <View {...props} style={[styles.container, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
