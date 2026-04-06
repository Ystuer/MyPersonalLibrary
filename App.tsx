import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({
    CustomFontRegular : require('./src/assets/fonts/Dosis-Regular.ttf'),
    CustomFontBold : require('./src/assets/fonts/Dosis-Bold.ttf'),
  })

  if(!fontsLoaded) return null;

  return (
    <View style={styles.container}>
      <Text style={{fontFamily: 'CustomFontBold'}}>Hello with custom font</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
