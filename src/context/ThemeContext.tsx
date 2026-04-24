import { createContext, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { darkColors, lightColors } from '../shared/colors';
import { toggleTheme, toggleViewMode } from '../store/preferencesSlice';
import type { RootState, AppDispatch } from '../store/store';

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
  const dispatch = useDispatch<AppDispatch>();
  const isDark = useSelector((state: RootState) => state.preferences.isDarkMode);
  const isCompact = useSelector((state: RootState) => state.preferences.isCompact);

  const theme = isDark ? darkColors : lightColors;

  return (
    <ThemeContext.Provider value={{
      theme,
      isDark,
      toggleTheme: () => dispatch(toggleTheme()),
      isCompact,
      toggleViewMode: () => dispatch(toggleViewMode()),
    }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
}
