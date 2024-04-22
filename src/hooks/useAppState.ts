import {useEffect, useState} from 'react';
import {AppState, type AppStateStatus} from 'react-native';

export const useAppState = (): AppStateStatus => {
  const [appState, setAppState] = useState<AppStateStatus>(
    AppState.currentState,
  );

  useEffect(() => {
    function onChange(newState: AppStateStatus) {
      setAppState(newState);
    }

    const subscription = AppState.addEventListener('change', onChange);

    return () => {
      subscription.remove();
    };
  }, []);

  return appState;
};

export type {AppStateStatus};
