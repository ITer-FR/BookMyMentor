import { useState } from 'react';
import { THEMELIST } from '../contexts/ThemeContext';
import type { ThemeContextType } from '../contexts/ThemeContext';

const useTheme = (startingTheme: string): ThemeContextType => {
  const [theme, setTheme] = useState(startingTheme);
  return {
    theme,
    toggleTheme: () => {
      if (theme === THEMELIST.DARK) {
        setTheme(THEMELIST.LIGHT);
      } else {
        setTheme(THEMELIST.DARK);
      }
    },
  };
};

export default useTheme;
