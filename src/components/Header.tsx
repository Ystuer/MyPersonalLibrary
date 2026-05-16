import { useState } from 'react';
import { Image, Modal, Text, TouchableOpacity, View } from 'react-native';
import { createGlobalStyles } from '../styles/globalStyle';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';

type HeaderProps = {
  title: string;
  canGoBack?: boolean;
  onBack?: () => void;
};

export default function Header({ title, canGoBack = false, onBack }: HeaderProps) {
  const { theme } = useTheme();
  const styles = createGlobalStyles(theme);
  const { signOut } = useAuth();
  const [showModal, setShowModal] = useState(false);

  return (
    <View style={styles.headerContainer}>
      {/* Left - logo, pressable as back button on child screens */}
      <TouchableOpacity style={styles.circleButton} onPress={canGoBack ? onBack : undefined} disabled={!canGoBack}>
        <Image
          source={require('../assets/images/MinimalistOpenBookIconCropped.png')}
          style={styles.iconLg}
          resizeMode="contain"
        />
      </TouchableOpacity>

      {/* Middle - Title */}
      <Text style={styles.headerTitle}>{title}</Text>

      {/* Right - Sign out */}
      <TouchableOpacity style={styles.circleButton} onPress={() => setShowModal(true)}>
        <Image
          source={require('../assets/images/icons/user.png')}
          style={styles.iconLg}
          resizeMode="contain"
        />
      </TouchableOpacity>

      <Modal visible={showModal} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.sectionTitle}>Sign out</Text>
            <Text style={styles.text}>Are you sure you want to sign out?</Text>
            <View style={[styles.buttonRow, { marginTop: 15 }]}>
              <TouchableOpacity
                style={[styles.button, { flex: 1, marginHorizontal: 5 }]}
                onPress={() => setShowModal(false)}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonDanger}
                onPress={() => { setShowModal(false); signOut(); }}
              >
                <Text style={styles.buttonText}>Sign out</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
