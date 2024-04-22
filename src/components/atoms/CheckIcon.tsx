import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export const CheckIcon: React.FC<SvgProps> = ({
  width = 13,
  height = 11,
  fill = '#fff',
  ...props
}) => {
  return (
    <Svg width={width} height={height} fill="none" {...props}>
      <Path
        fill={fill}
        fillRule="evenodd"
        d="M12.181 1.113a.9.9 0 01.106 1.268l-6.6 7.8a.9.9 0 01-1.342.037l-3.4-3.6a.9.9 0 111.309-1.236L4.963 8.25l5.95-7.031a.9.9 0 011.268-.106z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
