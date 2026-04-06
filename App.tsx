import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { globalStyles } from './src/assets/styles/globalStyle';

export default function App() {
  const [fontsLoaded] = useFonts({
    CustomFontRegular : require('./src/assets/fonts/Dosis-Regular.ttf'),
    CustomFontBold : require('./src/assets/fonts/Dosis-Bold.ttf'),
  })

  if(!fontsLoaded) return null;

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.text}>Hello with custom font</Text>
      <StatusBar style="auto" />
    </View>
  );
}
