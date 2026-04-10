import { useFonts } from 'expo-font';
import * as  SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import DashboardScreen from './src/screens/DashboardScreen';
import { ThemeProvider } from './src/context/ThemeContext';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    CustomFontRegular : require('./src/assets/fonts/Dosis-Regular.ttf'),
    CustomFontBold : require('./src/assets/fonts/Dosis-Bold.ttf'),
  })

  useEffect(() => {
    if(fontsLoaded){
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded]);

  if(!fontsLoaded) return null;

  return (
    <ThemeProvider>
      <DashboardScreen />
    </ThemeProvider>
  );
}
