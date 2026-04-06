import { View, Text, Image } from "react-native";
import { globalStyles } from "../assets/styles/globalStyle";

export default function LoginScreen() {
    return (
        <View style={globalStyles.container}>
            <View style={globalStyles.imageBox}>
                <Image 
                    source={require('../assets/images/MinimalistOpenBookIconCropped.png')}
                    style={{width: '100%', height: '100%', borderRadius: 12}}
                    resizeMode="contain"
                /> 
            </View>
            <View style={globalStyles.box}>
                <Text>Login</Text>
            </View>
        </View>
    );
}