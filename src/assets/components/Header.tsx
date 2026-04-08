import { Image, View, Text, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/globalStyle";

export default function Header() {
    return (
        <View style={globalStyles.headerContainer}>
            {/* Left - Logo */}
            <View style={globalStyles.headerCircle}>
                <Image
                    source={require('../images/MinimalistOpenBookIconCropped.png')}
                    style={globalStyles.headerImage}
                    resizeMode="contain"
                />
            </View>

            {/* Middle - Title */}
            <Text style={globalStyles.headerTitle}>My Personal Library</Text>

            {/* Right - Button */}
            <TouchableOpacity style={globalStyles.headerCircle}>
                <Image
                source={require('../images/icons/user.png')}
                style={globalStyles.headerImage}
                resizeMode="contain"
                />
            </TouchableOpacity>
        </View>
    )
}