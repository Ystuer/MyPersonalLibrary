import { useFonts } from 'expo-font';
import * as  SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import AddBookScreen from './src/screens/AddBookScreen';

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
    <AddBookScreen />
  );
}
