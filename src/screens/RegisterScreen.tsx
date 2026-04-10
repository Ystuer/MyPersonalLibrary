import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { createGlobalStyles } from "../assets/styles/globalStyle";
import { Formik } from 'formik'; 
import * as Yup from 'yup';
import { useTheme } from "../context/ThemeContext";

const RegisterSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(6, 'Too short').required('Required'),
    repeatPassword: Yup.string().oneOf([Yup.ref('password')], 'Passwords must match').required('Required'),
});

export default function RegisterScreen() {
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
                    initialValues={{email: '', password: '', repeatPassword: ''}}
                    validationSchema={RegisterSchema}
                    onSubmit={(values) => console.log(values)}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                        <View style={{ width: '100%' }}>
                            <TextInput
                                placeholder="email"
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

                            <TextInput
                                placeholder="Repeat Password"
                                style={styles.input}
                                secureTextEntry
                                onChangeText={handleChange('repeatPassword')}
                                onBlur={handleBlur('repeatPassword')}
                                value={values.repeatPassword}
                            />
                            {errors.repeatPassword && touched.repeatPassword && (<Text style={styles.error}>{errors.repeatPassword}</Text>)}
                        
                            <TouchableOpacity onPress={() => handleSubmit()} style={styles.button}>
                                <Text style={{ color: '#fff' }}>Register</Text>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Text style={styles.link}>Already have an account? Login</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </Formik>
                <Text>Register</Text>
            </View>
        </View>
    );
}