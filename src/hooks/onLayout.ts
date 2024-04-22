import {useState, useCallback} from 'react';
import {LayoutChangeEvent, LayoutRectangle} from 'react-native';

type UseLayoutReturn = {
  x: number;
  y: number;
  width: number;
  height: number;
  onLayout: (e: LayoutChangeEvent) => void;
};

export const useLayout = (): UseLayoutReturn => {
  const [layout, setLayout] = useState<LayoutRectangle>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  const onLayout = useCallback(
    (e: LayoutChangeEvent) => setLayout(e.nativeEvent.layout),
    [],
  );

  return {
    onLayout,
    ...layout,
  };
};
