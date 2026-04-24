import { Image, TextInput, TouchableOpacity, View } from "react-native";
import { createGlobalStyles } from "../styles/globalStyle";
import { useState } from "react";
import OptionsModal from "./OptionsModal";
import { useTheme } from "../context/ThemeContext";

export default function Options() {
    const [modalVisible, setModalVisible] = useState(false);
    const { theme } = useTheme();
    const styles = createGlobalStyles(theme);

    return (
        <View style={styles.optionsContainer}>
            {/* Left - Filter */}
            <TouchableOpacity style={styles.circleButton}>
                <Image
                    source={require('../assets/images/icons/sink.png')}
                    style={styles.iconMd}
                    resizeMode="contain"
                />
            </TouchableOpacity>

            {/* Middle - Search */}
            <TextInput
                placeholder="Search..."
                placeholderTextColor={theme.secondaryBackground}
                style={styles.searchInput}
            />

            {/* Right - Settings */}
            <TouchableOpacity 
                style={styles.circleButton}
                onPress={() => setModalVisible(true)}
            >
                <Image
                    source={require('../assets/images/icons/filter.png')}
                    style={styles.iconMd}
                    resizeMode="contain"
                />
            </TouchableOpacity>
            <OptionsModal visible={modalVisible} onClose={() => setModalVisible(false)}/>
        </View>
    )
}