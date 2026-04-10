import { View, Text } from "react-native";
import { createGlobalStyles } from "../assets/styles/globalStyle";
import Header from "../assets/components/Header";
import Options from "../assets/components/Options";
import Gallery from "../assets/components/Gallery";
import Footer from "../assets/components/Footer";
import { useTheme } from "../context/ThemeContext";

export default function DashboardScreen() {
    const { theme } = useTheme();
    const styles = createGlobalStyles(theme);

    return (
        <View style={styles.container}>
            {/* Header */}
            <Header />

            {/* Options */}
            <Options />

            {/* Gallery */}
            <Gallery />

            {/* Footer */}
            <Footer />
        </View>
    )
}