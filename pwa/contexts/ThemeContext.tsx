import React from 'react';
import useTheme from '../hooks/useTheme';

type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};

const THEMELIST = {
  DARK: 'dark',
  LIGHT: 'light',
};

const ThemeContext = React.createContext<ThemeContextType | null>({
  theme: THEMELIST.LIGHT,
  toggleTheme: () => ({}),
});

const ThemeToggleProvider = ({ children, startingTheme }) => {
  const state = useTheme(startingTheme);
  return <ThemeContext.Provider value={state}>{children}</ThemeContext.Provider>;
};

export { ThemeContext, ThemeToggleProvider, THEMELIST };
export type { ThemeContextType };
