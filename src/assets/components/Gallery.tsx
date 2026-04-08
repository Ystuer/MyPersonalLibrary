import { View, Text, FlatList } from 'react-native';
import { globalStyles } from '../styles/globalStyle';
import BookCard from './bookCard';

const data = Array.from({ length: 10 }, (_, i) => ({
  id: i.toString(),
  title: `Beyond the ocean door`,
}));

export default function Gallery() {
  return (
    <View style={globalStyles.galleryContainer}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <BookCard title={item.title} />
        )}
        contentContainerStyle={globalStyles.galleryContent}
        showsVerticalScrollIndicator={true}
        numColumns={2}
      />
    </View>
  );
}