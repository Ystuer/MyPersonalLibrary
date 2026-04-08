import { View, Text } from "react-native";
import { globalStyles } from "../assets/styles/globalStyle";
import Header from "../assets/components/Header";
import Options from "../assets/components/Options";
import Gallery from "../assets/components/Gallery";
import Footer from "../assets/components/Footer";

export default function DashboardScreen() {
    return (
        <View style={globalStyles.container}>
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