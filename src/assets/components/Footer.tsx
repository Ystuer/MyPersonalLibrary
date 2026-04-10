import { View, Text, TouchableOpacity } from 'react-native';
import { createGlobalStyles } from '../styles/globalStyle';
import { useTheme } from '../../context/ThemeContext';

export default function Footer() {
  const { theme } = useTheme();
  const styles = createGlobalStyles(theme);
  
  return (
    <View style={styles.footerContainer}>
      <TouchableOpacity style={styles.footerButton}>
        <Text style={styles.buttonText}>Add new title to collection</Text>
      </TouchableOpacity>
    </View>
  );
}