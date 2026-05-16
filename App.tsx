import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/store/store';
import { AuthProvider } from './src/context/AuthContext';
import { ThemeProvider } from './src/context/ThemeContext';
import { BooksProvider } from './src/context/BooksContext';
import RootNavigator from './src/navigation/AppNavigator';

import * as SplashScreen from 'expo-splash-screen';
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    CustomFontRegular: require('./src/assets/fonts/Dosis-Regular.ttf'),
    CustomFontBold: require('./src/assets/fonts/Dosis-Bold.ttf'),
  });

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthProvider>
          <ThemeProvider>
            <BooksProvider>
              <RootNavigator fontsLoaded={fontsLoaded ?? false} />
            </BooksProvider>
          </ThemeProvider>
        </AuthProvider>
      </PersistGate>
    </Provider>
  );
}
