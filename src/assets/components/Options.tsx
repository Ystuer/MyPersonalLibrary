import { Image, TextInput, TouchableOpacity, View } from "react-native";
import { globalStyles } from "../styles/globalStyle";

export default function Options() {
    return (
        <View style={globalStyles.optionsContainer}>
            {/* Left - Filter */}
            <TouchableOpacity style={globalStyles.optionCircle}>
                <Image
                    source={require('../images/icons/sink.png')}
                    style={globalStyles.optionIcon}
                    resizeMode="contain"
                />
            </TouchableOpacity>

            {/* Middle - Search */}
            <TextInput placeholder="Search..." style={globalStyles.searchInput}/>

            {/* Right - Settings */}
            <TouchableOpacity style={globalStyles.optionCircle}>
                <Image
                source={require('../images/icons/filter.png')}
                style={globalStyles.optionIcon}
                resizeMode="contain"
                />
            </TouchableOpacity>
        </View>
    )
}