import React, { createContext, useContext, useState } from 'react';
import { ThemeOption, themes } from '../types/theme';

interface ThemeContextType {
  theme: ThemeOption;
  setTheme: (themeKey: string) => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeOption>(themes.default);

  const setTheme = (themeKey: string) => {
    setThemeState(themes[themeKey] || themes.default);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};