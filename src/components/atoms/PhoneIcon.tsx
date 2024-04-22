import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export const PhoneIcon: React.FC<SvgProps> = ({
  width = 20,
  height = 20,
  ...props
}) => {
  return (
    <Svg width={width} height={height} fill="none" {...props}>
      <Path
        fill="#03050F"
        d="M16.875 13.381l-2.5-1.456a1.25 1.25 0 00-1.65.337l-1.362 1.813a9.998 9.998 0 01-3.382-2.031A10 10 0 015.95 8.656L7.762 7.3A1.25 1.25 0 008.1 5.65L6.619 3.125a1.25 1.25 0 00-1.838-.412l-.856.625A3.238 3.238 0 002.544 6a10.444 10.444 0 003.381 8.125 10.444 10.444 0 008.125 3.381 3.238 3.238 0 002.662-1.381l.625-.856a1.251 1.251 0 00-.462-1.888z"
      />
    </Svg>
  );
};
