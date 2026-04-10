import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { createGlobalStyles} from "../assets/styles/globalStyle";
import { Formik } from "formik";
import * as Yup from "yup";
import { useTheme } from "../context/ThemeContext";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Too short').required('Required'),
});

export default function LoginScreen() {
    const { theme } = useTheme();
    const styles = createGlobalStyles(theme);

    return (
        <View style={styles.container}>
            <View style={styles.imageBox}>
                <Image 
                    source={require('../assets/images/MinimalistOpenBookIconCropped.png')}
                    style={{width: '100%', height: '100%', borderRadius: 12}}
                    resizeMode="contain"
                /> 
            </View>
            <View style={styles.box}>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validationSchema={LoginSchema}
                    onSubmit={(values) => console.log(values)}
                    >
                    {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                        <View style={{ width: '100%' }}>
                            <TextInput
                                placeholder="Email"
                                style={styles.input}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                            />
                            {errors.email && touched.email && <Text style={styles.error}>{errors.email}</Text>}

                            <TextInput
                                placeholder="Password"
                                style={styles.input}
                                secureTextEntry
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                            />
                            {errors.password && touched.password && <Text style={styles.error}>{errors.password}</Text>}

                            <TouchableOpacity onPress={() => handleSubmit()} style={styles.button}>
                                <Text style={{ color: '#fff' }}>Login</Text>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Text style={styles.link}>Don't have an account? Register</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </Formik>
            </View>
        </View>
    );
}