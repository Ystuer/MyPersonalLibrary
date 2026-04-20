import { View, FlatList } from 'react-native';
import { createGlobalStyles } from '../styles/globalStyle';
import BookCard from './bookCard';
import { useTheme } from '../../context/ThemeContext';

const data = Array.from({ length: 10 }, (_, i) => ({
  id: i.toString(),
  title: `Beyond the ocean door`,
}));

export default function Gallery() {
  const { theme, isCompact } = useTheme();
  const styles = createGlobalStyles(theme);

  return (
    <View style={styles.galleryContainer}>
      <FlatList
        key={isCompact ? 'compact' : 'detailed'}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <BookCard title={item.title} isCompact={isCompact} />}
        contentContainerStyle={styles.galleryContent}
        showsVerticalScrollIndicator={true}
        numColumns={isCompact ? 1 : 2}
      />
    </View>
  );
}
