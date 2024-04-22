import React from 'react';
import {ScrollView, ScrollViewProps, StyleSheet} from 'react-native';
import {APP_COLORS} from '@rimac/theme/colors';

interface Props extends ScrollViewProps {}

export const ScrollContainer: React.FC<Props> = ({
  style,
  children,
  ...props
}) => {
  return (
    <ScrollView style={[styles.container, style]} {...props}>
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: APP_COLORS.BACKGROUND_COLOR,
  },
});
