import { View, FlatList, ActivityIndicator } from 'react-native';
import { createGlobalStyles } from '../styles/globalStyle';
import BookCard from './BookCard';
import { useTheme } from '../context/ThemeContext';
import { useBooks } from '../context/BooksContext';

export default function Gallery() {
  const { theme, isCompact } = useTheme();
  const styles = createGlobalStyles(theme);
  const { books, isLoading, deleteBook } = useBooks();

  if (isLoading) {
    return (
      <View style={[styles.galleryContainer, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color={theme.primary} />
      </View>
    );
  }

  return (
    <View style={styles.galleryContainer}>
      <FlatList
        key={isCompact ? 'compact' : 'detailed'}
        data={books}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <BookCard title={item.title} bookId={item.id} coverImage={item.coverImage} isCompact={isCompact} onDelete={() => deleteBook(item.id)} />
        )}
        contentContainerStyle={styles.galleryContent}
        showsVerticalScrollIndicator={true}
        numColumns={isCompact ? 1 : 2}
      />
    </View>
  );
}
