import React from 'react';
import {
  Linking,
  Pressable,
  Text,
  View,
  ViewProps,
  StyleSheet,
} from 'react-native';
import {PhoneIcon} from '../atoms/PhoneIcon';
import {APP_COLORS} from '@rimac/theme/colors';

interface Props extends ViewProps {}

export const HeaderRightContent: React.FC<Props> = ({style, ...props}) => {
  return (
    <View style={[styles.container, style]} {...props}>
      <Pressable
        onPress={() => {
          Linking.openURL(`tel:(01) 411 6001`);
        }}
        style={[styles.button_container]}>
        <PhoneIcon />
        <Text style={{}}>(01) 411 6001</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 8,
  },
  button_container: {
    gap: 8,
    flexDirection: 'row',
    paddingHorizontal: 0,
    paddingVertical: 2,
  },
  button_text: {
    color: APP_COLORS.TEXT_COLOR,
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '700',
    letterSpacing: 0.4,
    textAlign: 'right',
  },
});
