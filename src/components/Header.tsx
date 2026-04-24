import { Image, View, Text, TouchableOpacity } from "react-native";
import { createGlobalStyles } from "../styles/globalStyle";
import { useTheme } from "../context/ThemeContext";

export default function Header() {
    const { theme } = useTheme();
    const styles = createGlobalStyles(theme);

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

            {/* Right - Button */}
            <TouchableOpacity style={styles.circleButton}>
                <Image
                source={require('../assets/images/icons/user.png')}
                style={styles.iconLg}
                resizeMode="contain"
                />
            </TouchableOpacity>
        </View>
    )
}