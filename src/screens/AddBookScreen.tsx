import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import * as Yup from 'yup';
import { createGlobalStyles } from '../assets/styles/globalStyle';
import { Formik } from 'formik';
import { useTheme } from '../context/ThemeContext';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

const AddBookSchema = Yup.object().shape({
  title: Yup.string().required('Required'),
  author: Yup.string().required('Required'),
  pages: Yup.number().typeError('Must be a number').required('Required'),
  publishDate: Yup.string().required('Required'),
  genre: Yup.string().required('Required'),
});

export default function AddBookScreen() {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const { theme } = useTheme();
    const styles = createGlobalStyles(theme);
    
    return(
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.container}>
                {/* First Division */}
                <View style={styles.box}>
                    <Text style={styles.sectionTitle}>Add new Title</Text>
                    <View style={styles.placeholderBox}>
                        <Text>API / Search Placeholder</Text>
                    </View>
                </View>

                {/* Second Division */}
                <View style={styles.box}>
                    <Text style={styles.sectionTitle}>
                        Didn't find it? Do it manually
                    </Text>

                    <Formik
                        initialValues={{
                            title: '',
                            author: '',
                            genre: '',
                            pages: '',
                            publishDate: '',
                        }}
                        validationSchema={AddBookSchema}
                        onSubmit={() => navigation.goBack()}
                    >
                        {({
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            values,
                            errors,
                            touched,
                        }) =>(
                            <View style={{ width: '100%' }}>
                                <TextInput 
                                    placeholder='Title'
                                    style={styles.input}
                                    onChangeText={handleChange('title')}
                                    onBlur={handleBlur('title')}
                                    value={values.title}
                                />
                                {errors.title && touched.title && (<Text style={styles.error}>{errors.title}</Text>)}

                                <TextInput
                                    placeholder='Author'
                                    style={styles.input}
                                    onChangeText={handleChange('author')}
                                    onBlur={handleBlur('author')}
                                    value={values.author}
                                />
                                {errors.author && touched.author && (<Text style={styles.error}>{errors.author}</Text>)}

                                <View style={{ marginBottom: 10 }}>
                                    <Text style={[styles.text, { marginBottom: 5 }]}>Genre</Text>

                                    <View style={styles.genreContainer}>
                                        {['fiction', 'nonfiction', 'fantasy', 'scifi', 'mystery', 'biography'].map(
                                        (genre) => (
                                            <TouchableOpacity
                                            key={genre}
                                            style={[
                                                styles.genreItem,
                                                values.genre === genre && styles.genreItemSelected,
                                            ]}
                                            onPress={() => handleChange('genre')(genre)}
                                            >
                                            <Text
                                                style={
                                                values.genre === genre
                                                    ? styles.genreTextSelected
                                                    : styles.genreText
                                                }
                                            >
                                                {genre}
                                            </Text>
                                            </TouchableOpacity>
                                        )
                                        )}
                                    </View>
                                </View>
                                {errors.genre && touched.genre && (<Text style={styles.error}>{errors.genre}</Text>)}

                                <TextInput
                                    placeholder="Total Pages"
                                    style={styles.input}
                                    keyboardType="numeric"
                                    onChangeText={handleChange('pages')}
                                    onBlur={handleBlur('pages')}
                                    value={values.pages}
                                />
                                {errors.pages && touched.pages && (<Text style={styles.error}>{errors.pages}</Text>)}

                                <TextInput
                                    placeholder="Publish Date"
                                    style={styles.input}
                                    onChangeText={handleChange('publishDate')}
                                    onBlur={handleBlur('publishDate')}
                                    value={values.publishDate}
                                />
                                {errors.publishDate && touched.publishDate && (<Text style={styles.error}>{errors.publishDate}</Text>)}
                                <View style={styles.buttonRow}>
                                    <TouchableOpacity onPress={() => handleSubmit()} style={styles.button}>
                                        <Text style={styles.buttonText}>Add Book</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                                        <Text style={styles.buttonText}>Back</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )}
                    </Formik>
                </View>
            </View>
        </ScrollView>
    )
}