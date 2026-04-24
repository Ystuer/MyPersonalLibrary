import { View, Text } from "react-native";
import { createGlobalStyles } from "../styles/globalStyle";
import Header from "../components/Header";
import Options from "../components/Options";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
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