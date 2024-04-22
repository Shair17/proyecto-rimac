import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BootSplash from 'react-native-bootsplash';

export const ReactNavigation: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <NavigationContainer
      onReady={() => {
        BootSplash.hide({fade: true});
      }}>
      {children}
    </NavigationContainer>
  );
};
