import { Modal, Switch, Text, TouchableOpacity, View } from "react-native";
import { createGlobalStyles } from "../styles/globalStyle";
import { useTheme } from "../../context/ThemeContext";

type optionProps = {
    visible: boolean;
    onClose: () => void;
}

export default function OptionsModal({visible, onClose}: optionProps){
    const { isDark, toggleTheme, isCompact, toggleViewMode, theme } = useTheme();
    const styles = createGlobalStyles(theme);

    return (
        <Modal visible={visible} transparent animationType="fade">
            <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                    <Text style={styles.sectionTitle}>Options</Text>

                    {/* Dark Mode */}
                    <View style={styles.optionRow}>
                        <Text style={styles.text}>Light / Dark Mode</Text>
                        <Switch
                            value={isDark}
                            onValueChange={toggleTheme}
                        />
                    </View>

                    {/* View Mode */}
                    <View style={styles.optionRow}>
                        <Text style={styles.text}>Compact / Detailed View</Text>
                        <Switch
                            value={isCompact}
                            onValueChange={toggleViewMode}
                        />
                    </View>

                    <TouchableOpacity onPress={() => onClose()} style={styles.button}>
                        <Text style={styles.buttonText}>Close</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}