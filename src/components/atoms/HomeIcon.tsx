import React from 'react';
import Svg, {
  Path,
  Defs,
  LinearGradient,
  Stop,
  SvgProps,
} from 'react-native-svg';

export const HomeIcon: React.FC<SvgProps> = ({
  width = 56,
  height = 56,
  ...props
}) => {
  return (
    <Svg width={width} height={height} fill="none" {...props}>
      <Path
        fill="url(#a)"
        d="M54.25 35a7 7 0 10-8.75 6.781V52.5H49V41.781A7 7 0 0054.25 35z"
      />
      <Path
        fill="url(#b)"
        d="M42.875 49H35v-7a7 7 0 10-14 0v7H9.625V20.344h-.12l16.977-12a2.625 2.625 0 013.027 0l16.866 11.901v5.172a9.552 9.552 0 013.5.326v-3.028l4.375 3.098v-4.294L31.528 5.482a6.14 6.14 0 00-7.067 0L1.75 21.538v4.288l4.375-3.093V49a3.5 3.5 0 003.5 3.5h33.25V49zM31.5 49h-7v-7a3.5 3.5 0 117 0v7z"
      />
      <Defs>
        <LinearGradient
          id="a"
          x1={40.616}
          x2={58.006}
          y1={29.926}
          y2={39.865}
          gradientUnits="userSpaceOnUse">
          <Stop offset={0.35} stopColor="#F7052D" />
          <Stop offset={0.85} stopColor="#CA5AFA" />
        </LinearGradient>
        <LinearGradient
          id="b"
          x1={1.75}
          x2={26.049}
          y1={4.363}
          y2={63.992}
          gradientUnits="userSpaceOnUse">
          <Stop offset={0.272} stopColor="#34263B" />
          <Stop offset={0.658} stopColor="#13172C" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};
