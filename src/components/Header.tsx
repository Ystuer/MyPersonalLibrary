import { Image, View, Text, TouchableOpacity } from "react-native";
import { createGlobalStyles } from "../styles/globalStyle";
import { useTheme } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";

export default function Header() {
    const { theme } = useTheme();
    const styles = createGlobalStyles(theme);
    const { signOut } = useAuth();

    return (
        <View style={styles.headerContainer}>
            {/* Left - Logo */}
            <View style={styles.circleButton}>
                <Image
                    source={require('../assets/images/MinimalistOpenBookIconCropped.png')}
                    style={styles.iconLg}
                    resizeMode="contain"
                />
            </View>

            {/* Middle - Title */}
            <Text style={styles.headerTitle}>My Personal Library</Text>

            {/* Right - Sign out */}
            <TouchableOpacity style={styles.circleButton} onPress={signOut}>
                <Image
                source={require('../assets/images/icons/user.png')}
                style={styles.iconLg}
                resizeMode="contain"
                />
            </TouchableOpacity>
        </View>
    )
}