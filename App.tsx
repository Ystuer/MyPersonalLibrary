import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { globalStyles } from './src/assets/styles/globalStyle';
import * as  SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import DashboardScreen from './src/screens/DashboardScreen';

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
    <DashboardScreen/>
  );
}
