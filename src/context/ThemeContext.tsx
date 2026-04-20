import { createContext, useContext, useState } from 'react';
import { darkColors, lightColors } from '../assets/shared/colors';


type ThemeType = typeof lightColors;

type ThemeContextType = {
  theme: ThemeType;
  isDark: boolean;
  toggleTheme: () => void;
  isCompact: boolean;
  toggleViewMode: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(false);
  const [isCompact, setIsCompact] = useState(false);

  const toggleTheme = () => setIsDark((prev) => !prev);
  const toggleViewMode = () => setIsCompact((prev) => !prev);

  const theme = isDark ? darkColors : lightColors;

  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleTheme, isCompact, toggleViewMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
}