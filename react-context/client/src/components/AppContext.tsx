import { createContext } from 'react';
import type { Auth, User } from '../lib';

export type AppContextValues = {
  user: User | undefined;
  token: string | undefined;
  handleSignIn: (auth: Auth) => void;
  handleSignOut: () => void;
};
export const AppContext = createContext<AppContextValues>({
  user: undefined,
  token: undefined,
  handleSignIn: () => undefined,
  handleSignOut: () => undefined,
});

export const UserProvider = AppContext.Provider;
