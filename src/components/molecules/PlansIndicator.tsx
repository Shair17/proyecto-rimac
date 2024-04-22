import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {ChevronArrowIcon} from '../atoms/ChevronArrowIcon';
import {Plan} from '@rimac/features/plans/plans.type';

interface Props {
  onBackPress: () => void;
  onNextPress: () => void;
  currentFlatListIndex: number;
  filteredPlans: Plan[];
}

export const PlansIndicator: React.FC<Props> = ({
  onBackPress,
  onNextPress,
  currentFlatListIndex,
  filteredPlans,
}) => {
  return (
    <View
      style={{
        paddingVertical: 34,
        paddingHorizontal: 24,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 16,
        }}>
        <Pressable onPress={() => {}}>
          <ChevronArrowIcon
            tintColor={currentFlatListIndex > 0 ? '#4F4FFF' : undefined}
          />
        </Pressable>

        <Text>
          {currentFlatListIndex + 1} / {filteredPlans?.length ?? 0}
        </Text>

        <Pressable onPress={() => {}}>
          <View style={{transform: [{rotate: '180deg'}]}}>
            <ChevronArrowIcon
              tintColor={
                currentFlatListIndex < filteredPlans!.length - 1
                  ? '#4F4FFF'
                  : undefined
              }
            />
          </View>
        </Pressable>
      </View>
    </View>
  );
};
