import { View, Text, FlatList } from 'react-native';
import { globalStyles } from '../styles/globalStyle';

const data = Array.from({ length: 10 }, (_, i) => ({
  id: i.toString(),
  title: `Item ${i + 1}`,
}));

export default function Gallery() {
  return (
    <View style={globalStyles.galleryContainer}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={globalStyles.card}>
            <Text>{item.title}</Text>
          </View>
        )}
        contentContainerStyle={globalStyles.galleryContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}