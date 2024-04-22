import React from 'react';
import {Text, View} from 'react-native';

interface Props {
  name: string;
}

export const PlansHeadingText: React.FC<Props> = ({name}) => {
  return (
    <View style={{gap: 8}}>
      <Text
        style={{
          color: '#141938',
          fontWeight: '700',
          fontSize: 28,
          lineHeight: 36,
          letterSpacing: -0.2,
        }}>
        {name} ¿Para quién deseas cotizar?
      </Text>

      <Text
        style={{
          color: '#141938',
          fontWeight: '400',
          fontSize: 16,
          lineHeight: 28,
          letterSpacing: 0.1,
        }}>
        Selecciona la opción que se ajuste más a tus necesidades.
      </Text>
    </View>
  );
};
