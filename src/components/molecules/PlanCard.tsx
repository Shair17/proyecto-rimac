import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {type FromWhoType} from '@rimac/screens/PlansScreen';
import {CheckIcon} from '../atoms/CheckIcon';

interface Props {
  onPress: () => void;
  fromWho: FromWhoType;
  Icon: React.FC;
  title: string;
  description: string;
  isSelected: boolean;
}

export const PlanCard: React.FC<Props> = ({
  onPress,
  fromWho,
  Icon,
  description,
  title,
  isSelected,
}) => {
  return (
    <Pressable onPress={onPress}>
      <View
        style={{
          borderColor: isSelected ? '#141938' : 'transparent',
          borderWidth: 3,

          backgroundColor: '#fff',
          paddingHorizontal: 24,
          paddingVertical: 16,
          paddingBottom: 40,
          borderRadius: 24,

          shadowColor: '#AEACF359',
          shadowOffset: {
            width: 0,
            height: 12,
          },
          shadowOpacity: 0.58,
          shadowRadius: 16.0,

          elevation: 24,
        }}>
        <View style={{alignItems: 'flex-end'}}>
          <View
            style={{
              width: 24,
              height: 24,
              borderColor: isSelected ? '#389E0D' : '#A9AFD9',
              backgroundColor: isSelected ? '#389E0D' : '#fff',
              borderWidth: 1,
              borderRadius: 999,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {fromWho === 'me' ? <CheckIcon /> : null}
          </View>
        </View>

        <View style={{gap: 8}}>
          <View
            style={{
              flexDirection: 'row',
              gap: 8,
              alignItems: 'center',
            }}>
            <Icon />

            <Text
              style={{
                color: '#141938',
                fontWeight: '900',
                fontSize: 20,
                lineHeight: 28,
                letterSpacing: -0.2,
              }}>
              {title}
            </Text>
          </View>

          <View>
            <Text
              style={{
                color: '#141938',
                fontWeight: '400',
                fontSize: 12,
                lineHeight: 20,
                letterSpacing: 0.2,
              }}>
              {description}
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};
