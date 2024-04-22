import React, {PropsWithChildren} from 'react';
import {View} from 'react-native';

interface Props extends React.FC<PropsWithChildren> {}

export const PlansContainer: Props = ({children}) => {
  return (
    <View
      style={{
        paddingTop: 32,
        gap: 24,
      }}>
      {children}
    </View>
  );
};
