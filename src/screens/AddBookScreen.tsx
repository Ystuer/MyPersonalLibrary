import { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View, Platform, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as Yup from 'yup';
import { createGlobalStyles } from '../styles/globalStyle';
import { Formik } from 'formik';
import { useTheme } from '../context/ThemeContext';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { useBooks } from '../context/BooksContext';

type AddBookNavProp = NativeStackNavigationProp<RootStackParamList>;

const AddBookSchema = Yup.object().shape({
  title: Yup.string().required('Required'),
  author: Yup.string().required('Required'),
  pages: Yup.number().typeError('Must be a number').required('Required'),
  publishDate: Yup.string().required('Required'),
  genre: Yup.string().required('Required'),
});

export default function AddBookScreen() {
    const navigation = useNavigation<AddBookNavProp>();
    const { theme } = useTheme();
    const styles = createGlobalStyles(theme);
    const { addBook } = useBooks();

    const [showDatePicker, setShowDatePicker] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [coverImage, setCoverImage] = useState<string | null>(null);

    const pickImage = async () => {
        const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!permission.granted) return;
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [2, 3],
            quality: 0.8,
        });
        if (!result.canceled) setCoverImage(result.assets[0].uri);
    };

    return(
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.container}>
                {/* API Search Placeholder */}
                <View style={styles.box}>
                    <Text style={styles.sectionTitle}>Add new Title</Text>
                    <View style={styles.placeholderBox}>
                        <Text style={styles.text}>API / Search Placeholder</Text>
                    </View>
                </View>

                {/* Manual Entry */}
                <View style={styles.box}>
                    <Text style={styles.sectionTitle}>Didn't find it? Do it manually</Text>

                    <Formik
                        initialValues={{ title: '', author: '', genre: '', pages: '', publishDate: '' }}
                        validationSchema={AddBookSchema}
                        onSubmit={async (values) => {
                            await addBook({ ...values, coverImage });
                            navigation.goBack();
                        }}
                    >
                        {({ handleChange, handleBlur, handleSubmit, setFieldValue, values, errors, touched }) => (
                            <View style={{ width: '100%' }}>

                                {/* Cover Image Picker */}
                                <TouchableOpacity onPress={pickImage} style={[styles.placeholderBox, { marginBottom: 15 }]}>
                                    {coverImage ? (
                                        <Image source={{ uri: coverImage }} style={{ width: '100%', height: '100%', borderRadius: 12 }} resizeMode="cover" />
                                    ) : (
                                        <Text style={styles.text}>Tap to select cover image</Text>
                                    )}
                                </TouchableOpacity>

                                <TextInput
                                    placeholder='Title'
                                    placeholderTextColor={theme.secondaryBackground}
                                    style={styles.input}
                                    onChangeText={handleChange('title')}
                                    onBlur={handleBlur('title')}
                                    value={values.title}
                                />
                                {errors.title && touched.title && <Text style={styles.error}>{errors.title}</Text>}

                                <TextInput
                                    placeholder='Author'
                                    placeholderTextColor={theme.secondaryBackground}
                                    style={styles.input}
                                    onChangeText={handleChange('author')}
                                    onBlur={handleBlur('author')}
                                    value={values.author}
                                />
                                {errors.author && touched.author && <Text style={styles.error}>{errors.author}</Text>}

                                {/* Genre */}
                                <View style={{ marginBottom: 10 }}>
                                    <Text style={[styles.text, { marginBottom: 5 }]}>Genre</Text>
                                    <View style={styles.genreContainer}>
                                        {['fiction', 'nonfiction', 'fantasy', 'scifi', 'mystery', 'biography'].map((genre) => (
                                            <TouchableOpacity
                                                key={genre}
                                                style={[styles.genreItem, values.genre === genre && styles.genreItemSelected]}
                                                onPress={() => handleChange('genre')(genre)}
                                            >
                                                <Text style={values.genre === genre ? styles.genreTextSelected : styles.genreText}>
                                                    {genre}
                                                </Text>
                                            </TouchableOpacity>
                                        ))}
                                    </View>
                                </View>
                                {errors.genre && touched.genre && <Text style={styles.error}>{errors.genre}</Text>}

                                <TextInput
                                    placeholder="Total Pages"
                                    placeholderTextColor={theme.secondaryBackground}
                                    style={styles.input}
                                    keyboardType="numeric"
                                    onChangeText={handleChange('pages')}
                                    onBlur={handleBlur('pages')}
                                    value={values.pages}
                                />
                                {errors.pages && touched.pages && <Text style={styles.error}>{errors.pages}</Text>}

                                {/* Date Picker */}
                                <TouchableOpacity
                                    style={[styles.input, { justifyContent: 'center' }]}
                                    onPress={() => setShowDatePicker(true)}
                                >
                                    <Text style={{ color: values.publishDate ? theme.text : theme.secondaryBackground }}>
                                        {values.publishDate || 'Publish Date'}
                                    </Text>
                                </TouchableOpacity>
                                {errors.publishDate && touched.publishDate && <Text style={styles.error}>{errors.publishDate}</Text>}

                                {showDatePicker && (
                                    <DateTimePicker
                                        value={selectedDate}
                                        mode="date"
                                        display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                                        onChange={(_, date) => {
                                            setShowDatePicker(Platform.OS === 'ios');
                                            if (date) {
                                                setSelectedDate(date);
                                                setFieldValue('publishDate', date.toLocaleDateString());
                                            }
                                        }}
                                    />
                                )}

                                <View style={styles.buttonRow}>
                                    <TouchableOpacity onPress={() => handleSubmit()} style={[styles.button, { flex: 1, marginHorizontal: 5 }]}>
                                        <Text style={styles.buttonText}>Add Book</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[styles.button, { flex: 1, marginHorizontal: 5 }]} onPress={() => navigation.goBack()}>
                                        <Text style={styles.buttonText}>Back</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )}
                    </Formik>
                </View>
            </View>
        </ScrollView>
    );
}
