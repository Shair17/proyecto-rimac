import React from 'react';
import Svg, {G, Circle, Path, Defs, ClipPath, SvgProps} from 'react-native-svg';

interface Props extends SvgProps {
  tintColor?: string;
}

export const ChevronArrowIcon: React.FC<Props> = ({
  width = 24,
  height = 24,
  tintColor = '#A9AFD9',
  ...props
}) => {
  return (
    <Svg width={width} height={height} fill="none" {...props}>
      <G clipPath="url(#a)">
        <Circle cx={12} cy={12} r={11} stroke={tintColor} strokeWidth={2} />
        <Path
          fill={tintColor}
          d="M12.972 15.904L9.064 12l3.908-3.904 1.057 1.058L11.187 12l2.842 2.846-1.057 1.058z"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
