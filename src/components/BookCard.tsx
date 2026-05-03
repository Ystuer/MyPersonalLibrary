import { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppStackParamList } from '../navigation/types';
import { createGlobalStyles } from '../styles/globalStyle';
import { useTheme } from '../context/ThemeContext';

type BookCardNavProp = NativeStackNavigationProp<AppStackParamList>;

type Props = {
  title: string;
  bookId: string;
  coverImage: string | null;
  isCompact: boolean;
  onDelete: () => void;
};

export default function BookCard({ title, bookId, coverImage, isCompact, onDelete }: Props) {
  const navigation = useNavigation<BookCardNavProp>();
  const { theme } = useTheme();
  const styles = createGlobalStyles(theme);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>{title}</Text>

        <View style={styles.cardActions}>
          <TouchableOpacity>
            <Image source={require('../assets/images/icons/gear.png')} style={styles.iconSm} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setShowDeleteModal(true)}>
            <Image source={require('../assets/images/icons/bin.png')} style={styles.iconSm} />
          </TouchableOpacity>
          {isCompact && (
            <TouchableOpacity onPress={() => navigation.navigate('BookDetail', { bookId })}>
              <Image source={require('../assets/images/icons/info.png')} style={styles.iconSm} />
            </TouchableOpacity>
          )}
        </View>
      </View>

      {!isCompact && (
        <View style={styles.cardBody}>
          <Image
            source={coverImage ? { uri: coverImage } : require('../assets/images/testCover.jpg')}
            style={styles.cardImage}
            resizeMode="cover"
          />
          <TouchableOpacity style={styles.infoIconContainer} onPress={() => navigation.navigate('BookDetail', { bookId })}>
            <Image source={require('../assets/images/icons/info.png')} style={styles.iconSm} />
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
