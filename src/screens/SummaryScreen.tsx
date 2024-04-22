import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {PersonsIcon} from '../components/atoms/PersonsIcon';
import {Container} from '@rimac/components/templates/Container';
import {APP_COLORS} from '@rimac/theme/colors';
import {NativeStackScreenProps} from 'react-native-screens/lib/typescript/native-stack/types';
import {RootStackParamsList} from '@rimac/navigation/types';

interface Props
  extends NativeStackScreenProps<RootStackParamsList, 'SummaryScreen'> {}

export const SummaryScreen: React.FC<Props> = ({route}) => {
  const {
    params: {plan, user, document, phone},
  } = route;

  return (
    <Container style={styles.container}>
      <View style={styles.container_spacing}>
        <Text style={styles.title}>Resumen del seguro</Text>

        <View style={styles.spacing}>
          <View style={styles.card}>
            <View style={styles.card_owner_container}>
              <Text style={styles.card_owner_subtitle}>
                Precios calculados para:
              </Text>

              <View style={styles.card_owner_content}>
                <PersonsIcon />

                <Text style={styles.card_owner_title}>
                  {user.name} {user.lastName}
                </Text>
              </View>
            </View>

            <View style={styles.card_spacing} />

            <View style={styles.card_section_container}>
              <Text style={styles.card_section_title}>Responsable de pago</Text>
              <Text style={styles.card_section_p}>DNI: {document}</Text>
              <Text style={styles.card_section_p}>Celular: {phone}</Text>
            </View>

            <View style={styles.card_section_container}>
              <Text style={styles.card_section_title}>Plan elegido</Text>
              <Text style={styles.card_section_p}>{plan.name}</Text>
              <Text style={styles.card_section_p}>
                Costo del Plan: S/ {plan.price} al mes
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: APP_COLORS.BACKGROUND_COLOR_SECONDARY,
  },
  container_spacing: {
    paddingHorizontal: 24,
    paddingTop: 33,
  },
  title: {
    textAlign: 'center',
    color: '#141938',
    fontWeight: '700',
    fontSize: 32,
    lineHeight: 40,
    letterSpacing: -0.6,
  },
  spacing: {
    paddingTop: 40,
  },
  card: {
    backgroundColor: APP_COLORS.CARD_BACKGROUND_COLOR,
    paddingHorizontal: 32,
    paddingVertical: 24,
    gap: 16,
    borderRadius: 24,

    shadowColor: '#AEACF340',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  card_owner_container: {
    gap: 8,
  },
  card_owner_subtitle: {
    color: APP_COLORS.TEXT_COLOR_SECONDARY,
    fontWeight: '900',
    fontSize: 10,
    lineHeight: 16,
    letterSpacing: 0.8,
  },
  card_owner_title: {
    color: APP_COLORS.TEXT_COLOR_SECONDARY,
    letterSpacing: -0.2,
    lineHeight: 28,
    fontSize: 20,
    fontWeight: '700',
  },
  card_owner_content: {
    flexDirection: 'row',
    gap: 12,
  },
  card_spacing: {
    borderWidth: 1,
    borderColor: '#D7DBF5',
  },
  card_section_container: {
    gap: 4,
  },
  card_section_title: {
    color: APP_COLORS.TEXT_COLOR_SECONDARY,
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.2,
  },
  card_section_p: {
    color: APP_COLORS.TEXT_COLOR_SECONDARY,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: 0.1,
  },
});
