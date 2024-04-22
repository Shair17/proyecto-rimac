import React from 'react';
import {View, StyleSheet, ViewProps} from 'react-native';
import {LogoPrimary} from '../atoms/LogoPrimary';

interface Props extends ViewProps {}

export const HeaderLeftContent: React.FC<Props> = ({
  style,
  children,
  ...props
}) => {
  return (
    <View style={[styles.container, style]} {...props}>
      <LogoPrimary />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 8,
  },
});
