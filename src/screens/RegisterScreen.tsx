import { View, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform } from "react-native";
import { createGlobalStyles } from "../styles/globalStyle";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useTheme } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../navigation/types";

type RegisterNavProp = NativeStackNavigationProp<AuthStackParamList, 'Register'>;

const RegisterSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(6, 'Too short').required('Required'),
    repeatPassword: Yup.string().oneOf([Yup.ref('password')], 'Passwords must match').required('Required'),
});

export default function RegisterScreen({ navigation }: { navigation: RegisterNavProp }) {
    const { theme } = useTheme();
    const styles = createGlobalStyles(theme);
    const { register, error, clearError } = useAuth();

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
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
                    onSubmit={async (values, { setSubmitting }) => {
                        clearError();
                        try {
                            await register(values.email, values.password);
                        } catch {
                            // error is set in AuthContext
                        } finally {
                            setSubmitting(false);
                        }
                    }}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isSubmitting }) => (
                        <View style={{ width: '100%' }}>
                            <TextInput
                                placeholder="Email"
                                placeholderTextColor={theme.secondaryBackground}
                                style={styles.input}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                keyboardType="email-address"
                                autoCapitalize="none"
                            />
                            {errors.email && touched.email && <Text style={styles.error}>{errors.email}</Text>}

                            <TextInput
                                placeholder="Password"
                                placeholderTextColor={theme.secondaryBackground}
                                style={styles.input}
                                secureTextEntry
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                            />
                            {errors.password && touched.password && <Text style={styles.error}>{errors.password}</Text>}

                            <TextInput
                                placeholder="Repeat Password"
                                placeholderTextColor={theme.secondaryBackground}
                                style={styles.input}
                                secureTextEntry
                                onChangeText={handleChange('repeatPassword')}
                                onBlur={handleBlur('repeatPassword')}
                                value={values.repeatPassword}
                            />
                            {errors.repeatPassword && touched.repeatPassword && (
                                <Text style={styles.error}>{errors.repeatPassword}</Text>
                            )}

                            {error && <Text style={styles.error}>{error}</Text>}

                            <TouchableOpacity
                                onPress={() => handleSubmit()}
                                style={[styles.button, { opacity: isSubmitting ? 0.6 : 1 }]}
                                disabled={isSubmitting}
                            >
                                <Text style={styles.buttonText}>{isSubmitting ? 'Registering...' : 'Register'}</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Text style={styles.link}>Already have an account? Login</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </Formik>
            </View>
        </View>
        </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
}
