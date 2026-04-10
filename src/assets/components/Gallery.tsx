import { View, Text, FlatList } from 'react-native';
import { createGlobalStyles } from '../styles/globalStyle';
import BookCard from './bookCard';
import { useTheme } from '../../context/ThemeContext';

const data = Array.from({ length: 10 }, (_, i) => ({
  id: i.toString(),
  title: `Beyond the ocean door`,
}));

export default function Gallery() {
  const { theme } = useTheme();
  const styles = createGlobalStyles(theme);

  return (
    <View style={styles.galleryContainer}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <BookCard title={item.title} />
        )}
        contentContainerStyle={styles.galleryContent}
        showsVerticalScrollIndicator={true}
        numColumns={2}
      />
    </View>
  );
}