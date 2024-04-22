import {useState, useCallback} from 'react';

type UseToggleReturn = [boolean, () => void];

export const useToggle = (initialState: boolean = false): UseToggleReturn => {
  const [state, setState] = useState<boolean>(initialState);

  const toggle = useCallback((): void => setState(state => !state), []);

  return [state, toggle];
};
