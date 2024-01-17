import { AppContext, AppContextValues } from './AppContext';
import { useContext } from 'react';

export function useUser(): AppContextValues {
  const values = useContext(AppContext);
  if (!values)
    throw new Error(
      'hook must only be used in a component that is inside the UserProvider tree'
    );
  return values;
}
