import { View, Text, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/globalStyle';

export default function Footer() {
  return (
    <View style={globalStyles.footerContainer}>
      <TouchableOpacity style={globalStyles.footerButton}>
        <Text style={globalStyles.buttonText}>Add new title to collection</Text>
      </TouchableOpacity>
    </View>
  );
}