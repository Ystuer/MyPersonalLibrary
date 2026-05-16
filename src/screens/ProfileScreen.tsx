import { View, Text } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import { createGlobalStyles } from '../styles/globalStyle';

export default function ProfileScreen() {
  const { theme } = useTheme();
  const styles = createGlobalStyles(theme);
  const { user } = useAuth();

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.sectionTitle}>Account</Text>
        <Text style={styles.text}>{user?.email}</Text>
      </View>
    </View>
  );
}
