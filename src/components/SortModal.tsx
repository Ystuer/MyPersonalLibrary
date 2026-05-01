import { Modal, Text, TouchableOpacity, View } from 'react-native';
import { createGlobalStyles } from '../styles/globalStyle';
import { useTheme } from '../context/ThemeContext';
import { useBooks, SortField, SortOrder } from '../context/BooksContext';

type SortModalProps = {
  visible: boolean;
  onClose: () => void;
};

const sortFields: { label: string; value: SortField }[] = [
  { label: 'Title', value: 'title' },
  { label: 'Author', value: 'author' },
  { label: 'Pages', value: 'pages' },
  { label: 'Publish Date', value: 'publishDate' },
];

const sortOrders: { label: string; value: SortOrder }[] = [
  { label: 'Ascending', value: 'asc' },
  { label: 'Descending', value: 'desc' },
];

export default function SortModal({ visible, onClose }: SortModalProps) {
  const { theme } = useTheme();
  const styles = createGlobalStyles(theme);
  const { sortBy, setSortBy, sortOrder, setSortOrder } = useBooks();

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.sectionTitle}>Sort by</Text>

          <View style={styles.genreContainer}>
            {sortFields.map(({ label, value }) => (
              <TouchableOpacity
                key={value}
                style={[styles.genreItem, sortBy === value && styles.genreItemSelected]}
                onPress={() => setSortBy(value)}
              >
                <Text style={sortBy === value ? styles.genreTextSelected : styles.genreText}>
                  {label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={[styles.sectionTitle, { marginTop: 15 }]}>Order</Text>

          <View style={styles.genreContainer}>
            {sortOrders.map(({ label, value }) => (
              <TouchableOpacity
                key={value}
                style={[styles.genreItem, sortOrder === value && styles.genreItemSelected]}
                onPress={() => setSortOrder(value)}
              >
                <Text style={sortOrder === value ? styles.genreTextSelected : styles.genreText}>
                  {label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity style={[styles.button, { marginTop: 15 }]} onPress={onClose}>
            <Text style={styles.buttonText}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
