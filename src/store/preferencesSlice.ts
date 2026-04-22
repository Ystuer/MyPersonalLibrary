import { createSlice } from '@reduxjs/toolkit';

type PreferencesState = {
  isDarkMode: boolean;
  isCompact: boolean;
};

const initialState: PreferencesState = {
  isDarkMode: false,
  isCompact: false,
};

const preferencesSlice = createSlice({
  name: 'preferences',
  initialState,
  reducers: {
    toggleTheme: (state) => { state.isDarkMode = !state.isDarkMode; },
    toggleViewMode: (state) => { state.isCompact = !state.isCompact; },
  },
});

export const { toggleTheme, toggleViewMode } = preferencesSlice.actions;
export default preferencesSlice.reducer;
