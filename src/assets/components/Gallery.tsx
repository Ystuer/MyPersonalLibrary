import { View, FlatList } from 'react-native';
import { createGlobalStyles } from '../styles/globalStyle';
import BookCard from './bookCard';
import { useTheme } from '../../context/ThemeContext';
import { useBooks } from '../../context/BooksContext';

export default function Gallery() {
  const { theme, isCompact } = useTheme();
  const styles = createGlobalStyles(theme);
  const { books, deleteBook } = useBooks();

  return (
    <View style={styles.galleryContainer}>
      <FlatList
        key={isCompact ? 'compact' : 'detailed'}
        data={books}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <BookCard title={item.title} isCompact={isCompact} onDelete={() => deleteBook(item.id)} />
        )}
        contentContainerStyle={styles.galleryContent}
        showsVerticalScrollIndicator={true}
        numColumns={isCompact ? 1 : 2}
      />
    </View>
  );
}
