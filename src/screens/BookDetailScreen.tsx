import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { useBooks } from '../context/BooksContext';
import { useTheme } from '../context/ThemeContext';
import { createGlobalStyles } from '../assets/styles/globalStyle';

type BookDetailRouteProp = RouteProp<RootStackParamList, 'BookDetail'>;
type BookDetailNavProp = NativeStackNavigationProp<RootStackParamList>;

const fields: { label: string; key: 'author' | 'genre' | 'pages' | 'publishDate' }[] = [
  { label: 'Author', key: 'author' },
  { label: 'Genre', key: 'genre' },
  { label: 'Pages', key: 'pages' },
  { label: 'Published', key: 'publishDate' },
];

export default function BookDetailScreen() {
  const navigation = useNavigation<BookDetailNavProp>();
  const { params } = useRoute<BookDetailRouteProp>();
  const { books } = useBooks();
  const { theme } = useTheme();
  const styles = createGlobalStyles(theme);

  const book = books.find((b) => b.id === params.bookId);

  if (!book) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Book not found.</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Go back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: theme.background }}>
      <View style={[styles.container, { justifyContent: 'flex-start', paddingTop: 30 }]}>

        <View style={styles.box}>
          <Image
            source={require('../assets/images/testCover.jpg')}
            style={{ width: '100%', height: 200, borderRadius: 12 }}
            resizeMode="contain"
          />
        </View>

        <View style={styles.box}>
          <Text style={[styles.sectionTitle, { fontSize: 20 }]}>{book.title}</Text>

          {fields.map(({ label, key }) => (
            <View key={key} style={{ width: '100%', marginBottom: 10 }}>
              <Text style={[styles.text, { color: theme.primary, fontSize: 12 }]}>{label}</Text>
              <Text style={styles.text}>{book[key]}</Text>
            </View>
          ))}
        </View>

        <TouchableOpacity style={[styles.button, { width: '80%' }]} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
}
