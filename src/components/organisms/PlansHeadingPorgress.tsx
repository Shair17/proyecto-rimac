import React from 'react';
import {Animated, LayoutChangeEvent, Pressable, Text, View} from 'react-native';
import {ChevronArrowIcon} from '../atoms/ChevronArrowIcon';
import {FromWhoType} from '@rimac/screens/PlansScreen';

interface Props {
  onGoBackStepPress: () => void;
  progressBarOnLayout: (e: LayoutChangeEvent) => void;
  animatedWidth: Animated.Value;
  fromWho: FromWhoType;
}

export const PlansHeadingPorgress: React.FC<Props> = ({
  onGoBackStepPress,
  progressBarOnLayout,
  animatedWidth,
  fromWho,
}) => {
  return (
    <View>
      <View
        style={{
          paddingHorizontal: 24,
          paddingVertical: 16,
          flexDirection: 'row',
          gap: 16,
          alignItems: 'center',
        }}>
        <Pressable onPress={onGoBackStepPress}>
          <ChevronArrowIcon />
        </Pressable>

        <Text
          style={{
            color: '#141938',
            fontWeight: '900',
            fontSize: 10,
            lineHeight: 16,
            letterSpacing: 0.8,
            textTransform: 'uppercase',
          }}>
          Paso {fromWho === null ? '1' : '2'} de 2
        </Text>

        <View style={{flex: 1, height: 6}}>
          <View
            onLayout={progressBarOnLayout}
            style={{
              backgroundColor: '#D7DBF5',
              height: 6,
              borderRadius: 20,
            }}
          />

          <Animated.View
            style={[
              {
                position: 'absolute',
                // width: '50%',
                backgroundColor: '#4F4FFF',
                height: 6,
                borderRadius: 20,
              },
              {width: animatedWidth},
            ]}></Animated.View>
        </View>
      </View>

      {/** Separator */}
      <View style={{borderColor: '#D7DBF5', borderWidth: 1}} />
    </View>
  );
};
