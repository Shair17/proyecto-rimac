import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {LogoSecondary} from '../atoms/LogoSecondary';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear().toString();

  return (
    <View style={styles.footer_container}>
      <View style={styles.footer_container_logo}>
        <LogoSecondary />
      </View>

      <View style={styles.footer_separator_spacing}>
        <View style={styles.footer_separator_item} />
      </View>

      <View style={styles.footer_separator_spacing}>
        <Text style={styles.footer_copyright_text}>
          © {currentYear} RIMAC Seguros y Reaseguros.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer_container: {
    backgroundColor: '#03050F',
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  footer_container_logo: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer_separator_spacing: {
    paddingTop: 24,
  },
  footer_separator_item: {
    borderWidth: 1,
    borderColor: '#2B304E',
  },
  footer_copyright_text: {
    color: '#FFFFFF',
    letterSpacing: 0.1,
    lineHeight: 20,
    fontSize: 12,
    fontWeight: '400',
    textAlign: 'center',
  },
});
