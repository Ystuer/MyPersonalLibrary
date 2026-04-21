import { useState } from 'react';
import { View, FlatList } from 'react-native';
import { createGlobalStyles } from '../styles/globalStyle';
import BookCard from './bookCard';
import { useTheme } from '../../context/ThemeContext';

const initialData = Array.from({ length: 10 }, (_, i) => ({
  id: i.toString(),
  title: `Beyond the ocean door`,
}));

export default function Gallery() {
  const { theme, isCompact } = useTheme();
  const styles = createGlobalStyles(theme);
  const [books, setBooks] = useState(initialData);

  const handleDelete = (id: string) => {
    setBooks((prev) => prev.filter((book) => book.id !== id));
  };

  return (
    <View style={styles.galleryContainer}>
      <FlatList
        key={isCompact ? 'compact' : 'detailed'}
        data={books}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <BookCard title={item.title} isCompact={isCompact} onDelete={() => handleDelete(item.id)} />
        )}
        contentContainerStyle={styles.galleryContent}
        showsVerticalScrollIndicator={true}
        numColumns={isCompact ? 1 : 2}
      />
    </View>
  );
}
