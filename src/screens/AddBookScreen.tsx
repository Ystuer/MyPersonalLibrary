import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import * as Yup from 'yup';
import { globalStyles } from '../assets/styles/globalStyle';
import { Formik } from 'formik';

const AddBookSchema = Yup.object().shape({
  title: Yup.string().required('Required'),
  author: Yup.string().required('Required'),
  pages: Yup.number().typeError('Must be a number').required('Required'),
  publishDate: Yup.string().required('Required'),
  genre: Yup.string().required('Required'),
});

export default function AddBookScreen() {
    return(
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={globalStyles.container}>
                {/* First Division */}
                <View style={globalStyles.box}>
                    <Text style={globalStyles.sectionTitle}>Add new Title</Text>
                    <View style={globalStyles.placeholderBox}>
                        <Text>API / Search Placeholder</Text>
                    </View>
                </View>

                {/* Second Division */}
                <View style={globalStyles.box}>
                    <Text style={globalStyles.sectionTitle}>
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
                        onSubmit={(values) => console.log(values)}
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
                                    style={globalStyles.input}
                                    onChangeText={handleChange('title')}
                                    onBlur={handleBlur('title')}
                                    value={values.title}
                                />
                                {errors.title && touched.title && (<Text style={globalStyles.error}>{errors.title}</Text>)}

                                <TextInput
                                    placeholder='Author'
                                    style={globalStyles.input}
                                    onChangeText={handleChange('author')}
                                    onBlur={handleBlur('author')}
                                    value={values.author}
                                />
                                {errors.author && touched.author && (<Text style={globalStyles.error}>{errors.author}</Text>)}

                                <View style={{ marginBottom: 10 }}>
                                    <Text style={{ marginBottom: 5 }}>Genre</Text>

                                    <View style={globalStyles.genreContainer}>
                                        {['fiction', 'nonfiction', 'fantasy', 'scifi', 'mystery', 'biography'].map(
                                        (genre) => (
                                            <TouchableOpacity
                                            key={genre}
                                            style={[
                                                globalStyles.genreItem,
                                                values.genre === genre && globalStyles.genreItemSelected,
                                            ]}
                                            onPress={() => handleChange('genre')(genre)}
                                            >
                                            <Text
                                                style={
                                                values.genre === genre
                                                    ? globalStyles.genreTextSelected
                                                    : undefined
                                                }
                                            >
                                                {genre}
                                            </Text>
                                            </TouchableOpacity>
                                        )
                                        )}
                                    </View>
                                </View>
                                {errors.genre && touched.genre && (<Text style={globalStyles.error}>{errors.genre}</Text>)}

                                <TextInput
                                    placeholder="Total Pages"
                                    style={globalStyles.input}
                                    keyboardType="numeric"
                                    onChangeText={handleChange('pages')}
                                    onBlur={handleBlur('pages')}
                                    value={values.pages}
                                />
                                {errors.pages && touched.pages && (<Text style={globalStyles.error}>{errors.pages}</Text>)}

                                <TextInput
                                    placeholder="Publish Date"
                                    style={globalStyles.input}
                                    onChangeText={handleChange('publishDate')}
                                    onBlur={handleBlur('publishDate')}
                                    value={values.publishDate}
                                />
                                {errors.publishDate && touched.publishDate && (<Text style={globalStyles.error}>{errors.publishDate}</Text>)}
                                <View style={globalStyles.buttonRow}>
                                    <TouchableOpacity onPress={() => handleSubmit()} style={globalStyles.button}>
                                        <Text style={globalStyles.buttonText}>Add Book</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={globalStyles.secondaryButton}>
                                        <Text style={globalStyles.secondaryButtonText}>Back</Text>
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