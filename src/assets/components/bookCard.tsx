import { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Modal } from 'react-native';
import { createGlobalStyles } from '../styles/globalStyle';
import { useTheme } from '../../context/ThemeContext';

type Props = {
  title: string;
  isCompact: boolean;
  onDelete: () => void;
};

export default function BookCard({ title, isCompact, onDelete }: Props) {
  const { theme } = useTheme();
  const styles = createGlobalStyles(theme);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>{title}</Text>

        <View style={styles.cardActions}>
          <TouchableOpacity>
            <Image source={require('../images/icons/gear.png')} style={styles.iconSm} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setShowDeleteModal(true)}>
            <Image source={require('../images/icons/bin.png')} style={styles.iconSm} />
          </TouchableOpacity>
          {isCompact && (
            <TouchableOpacity>
              <Image source={require('../images/icons/info.png')} style={styles.iconSm} />
            </TouchableOpacity>
          )}
        </View>
      </View>

      {!isCompact && (
        <View style={styles.cardBody}>
          <Image
            source={require('../images/testCover.jpg')}
            style={styles.cardImage}
            resizeMode="contain"
          />
          <TouchableOpacity style={styles.infoIconContainer}>
            <Image source={require('../images/icons/info.png')} style={styles.iconSm} />
          </TouchableOpacity>
        </View>
      )}

      <Modal visible={showDeleteModal} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.sectionTitle}>Delete book</Text>
            <Text style={styles.text}>Are you sure you want to delete "{title}"? This cannot be undone.</Text>
            <View style={[styles.buttonRow, { marginTop: 15 }]}>
              <TouchableOpacity style={[styles.button, { flex: 1, marginHorizontal: 5 }]} onPress={() => setShowDeleteModal(false)}>
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonDanger} onPress={() => { setShowDeleteModal(false); onDelete(); }}>
                <Text style={styles.buttonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
