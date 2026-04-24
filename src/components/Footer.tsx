import { View, Text, TouchableOpacity } from 'react-native';
import { createGlobalStyles } from '../styles/globalStyle';
import { useTheme } from '../context/ThemeContext';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type FooterNavProp = NativeStackNavigationProp<RootStackParamList>;

export default function Footer() {
  const { theme } = useTheme();
  const styles = createGlobalStyles(theme);
  const navigation = useNavigation<FooterNavProp>();

  return (
    <View style={styles.footerContainer}>
      <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('AddBook')}>
        <Text style={styles.buttonText}>Add new title to collection</Text>
      </TouchableOpacity>
    </View>
  );
}
