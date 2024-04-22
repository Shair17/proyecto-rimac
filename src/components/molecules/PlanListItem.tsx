import React, {useId} from 'react';
import {Pressable, Text, View} from 'react-native';
import {HomeIcon} from '../atoms/HomeIcon';
import {HospitalIcon} from '../atoms/HospitalIcon';
import {useDimensions} from '@rimac/hooks/useDimensions';
import {Plan} from '@rimac/features/plans/plans.type';

interface Props extends Plan {
  onSelectPlanPress: () => void;
}

export const PlanListItem: React.FC<Props> = ({
  description,
  name,
  price,
  onSelectPlanPress,
}) => {
  const uniqueId = useId();
  const {
    screen: {width: screenWidth},
  } = useDimensions();
  const Icon = Math.random() >= 0.5 ? HomeIcon : HospitalIcon;

  return (
    <View
      style={{
        width: screenWidth * 0.9,
        backgroundColor: '#fff',
        paddingHorizontal: 32,
        paddingVertical: 40,
        paddingBottom: 48,
        gap: 24,
        borderRadius: 24,

        marginHorizontal: screenWidth * 0.05,

        shadowColor: '#AEACF359',
        shadowOffset: {
          width: 0,
          height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,

        elevation: 24,
      }}>
      <View style={{gap: 8}}>
        <View
          style={{
            gap: 16,
            flexDirection: 'row',
          }}>
          <View style={{flex: 1}}>
            <Text
              style={{
                color: '#141938',
                fontWeight: '900',
                fontSize: 24,
                lineHeight: 32,
                letterSpacing: -0.2,
              }}>
              {name}
            </Text>
          </View>

          <Icon />
        </View>
        <View>
          <Text
            style={{
              color: '#7981B2',
              fontWeight: '900',
              fontSize: 12,
              lineHeight: 16,
              letterSpacing: 0.6,
            }}>
            Costo del plan
          </Text>
          <Text
            style={{
              color: '#141938',
              fontWeight: '900',
              fontSize: 20,
              lineHeight: 28,
              letterSpacing: -0.2,
            }}>
            S/ {price} al mes
          </Text>
        </View>
      </View>

      <View style={{borderColor: '#D7DBF5', borderWidth: 1}}></View>

      <View style={{gap: 24}}>
        {description.map(item => {
          return (
            <View key={`${uniqueId}-description-${item}`}>
              <Text
                style={{
                  color: '#141938',
                  fontWeight: '400',
                  fontSize: 16,
                  lineHeight: 28,
                  letterSpacing: 0.1,
                }}>
                {'\u2B24'} {item}
              </Text>
            </View>
          );
        })}
      </View>

      <View style={{paddingTop: 40}}>
        <Pressable
          onPress={onSelectPlanPress}
          style={{
            backgroundColor: '#FF1C44',
            borderRadius: 32,
            paddingHorizontal: 32,
            paddingVertical: 14,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#fff',
              fontWeight: '700',
              fontSize: 18,
              lineHeight: 20,
              letterSpacing: 0.4,
              textAlign: 'center',
            }}>
            Seleccionar plan
          </Text>
        </Pressable>
      </View>
    </View>
  );
};
