import React from 'react';
import Svg, {
  Path,
  Defs,
  LinearGradient,
  Stop,
  SvgProps,
} from 'react-native-svg';

export const UserShieldIcon: React.FC<SvgProps> = ({
  width = 32,
  height = 32,
  ...props
}) => {
  return (
    <Svg width={width} height={height} fill="none" {...props}>
      <Path
        fill="url(#a)"
        d="M29.959 9.547a2.145 2.145 0 00-1.14-2.33L16.956 1.284a2.153 2.153 0 00-1.912 0L3.18 7.216a2.145 2.145 0 00-1.14 2.331l1.661 8.304a13.991 13.991 0 005.423 8.524l.514.375c.03-.755.152-1.503.362-2.229a11.992 11.992 0 01-4.332-7.069l-1.67-8.297a.14.14 0 01.075-.15l11.862-5.931a.144.144 0 01.125 0L27.924 9a.14.14 0 01.073.15l-1.66 8.305a12.025 12.025 0 01-.943 2.824 9.332 9.332 0 011.4 1.647 13.999 13.999 0 001.5-4.08l1.665-8.299z"
      />
      <Path
        fill="url(#b)"
        d="M22.866 20.135l-1.953-1.079A4 4 0 0023 15.541V13.96a4 4 0 00-8 0v1.582a4 4 0 002.087 3.515l-1.953 1.079a8 8 0 00-4.134 7V29a1 1 0 001 1h14a1 1 0 001-1v-1.861a8 8 0 00-4.134-7.004z"
      />
      <Defs>
        <LinearGradient
          id="a"
          x1={2}
          x2={14.974}
          y1={1.061}
          y2={32.877}
          gradientUnits="userSpaceOnUse">
          <Stop offset={0.272} stopColor="#34263B" />
          <Stop offset={0.658} stopColor="#13172C" />
        </LinearGradient>
        <LinearGradient
          id="b"
          x1={11.419}
          x2={27.521}
          y1={11.532}
          y2={24.387}
          gradientUnits="userSpaceOnUse">
          <Stop offset={0.35} stopColor="#F7052D" />
          <Stop offset={0.85} stopColor="#CA5AFA" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};
