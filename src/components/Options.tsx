import { Image, TextInput, TouchableOpacity, View } from "react-native";
import { createGlobalStyles } from "../styles/globalStyle";
import { useState } from "react";
import OptionsModal from "./OptionsModal";
import SortModal from "./SortModal";
import { useTheme } from "../context/ThemeContext";
import { useBooks } from "../context/BooksContext";

export default function Options() {
    const [optionsVisible, setOptionsVisible] = useState(false);
    const [sortVisible, setSortVisible] = useState(false);
    const { theme } = useTheme();
    const styles = createGlobalStyles(theme);
    const { searchQuery, setSearchQuery } = useBooks();

    return (
        <View style={styles.optionsContainer}>
            {/* Left - Sort */}
            <TouchableOpacity style={styles.circleButton} onPress={() => setSortVisible(true)}>
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
                value={searchQuery}
                onChangeText={setSearchQuery}
            />

            {/* Right - Settings */}
            <TouchableOpacity
                style={styles.circleButton}
                onPress={() => setOptionsVisible(true)}
            >
                <Image
                    source={require('../assets/images/icons/filter.png')}
                    style={styles.iconMd}
                    resizeMode="contain"
                />
            </TouchableOpacity>

            <OptionsModal visible={optionsVisible} onClose={() => setOptionsVisible(false)} />
            <SortModal visible={sortVisible} onClose={() => setSortVisible(false)} />
        </View>
    );
}
