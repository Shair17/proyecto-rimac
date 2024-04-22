import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export const PersonsIcon: React.FC<SvgProps> = ({
  width = 24,
  height = 24,
  ...props
}) => {
  return (
    <Svg width={width} height={height} fill="none" {...props}>
      <Path
        fill="#141938"
        d="M20.146 13.765h-1.915a3.825 3.825 0 00-3.831 3.832V22h5.77c2.12 0 3.83-1.71 3.83-3.832v-.548a3.85 3.85 0 00-3.854-3.855zM18.6 12.588c1.657 0 3-1.317 3-2.94 0-1.625-1.343-2.942-3-2.942s-3 1.317-3 2.941c0 1.624 1.343 2.941 3 2.941zM7.8 10.235c2.32 0 4.2-1.843 4.2-4.117S10.12 2 7.8 2C5.48 2 3.6 3.844 3.6 6.118s1.88 4.117 4.2 4.117zm6.6 3.113a4.62 4.62 0 00-2.524-.76H4.327C1.947 12.588 0 14.4 0 16.612v1.632C0 20.324 1.803 22 4.039 22h8.101v-4.315c0-1.743.89-3.308 2.26-4.337z"
      />
    </Svg>
  );
};
