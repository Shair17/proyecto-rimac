import {useEffect, useState} from 'react';
import {Dimensions, ScaledSize} from 'react-native';

type UseDimensionsReturn = {
  window: ScaledSize;
  screen: ScaledSize;
};

export const useDimensions = (): UseDimensionsReturn => {
  const [dimensions, setDimensions] = useState({
    window: Dimensions.get('window'),
    screen: Dimensions.get('screen'),
  });

  const onChange = ({
    window,
    screen,
  }: {
    window: ScaledSize;
    screen: ScaledSize;
  }) => {
    setDimensions({window, screen});
  };

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', onChange);

    return () => {
      subscription.remove();
    };
  }, []);

  return dimensions;
};
