import React from 'react';
import {View} from 'react-native';

export const PlansListContainer: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return <View style={{paddingTop: 40}}>{children}</View>;
};
