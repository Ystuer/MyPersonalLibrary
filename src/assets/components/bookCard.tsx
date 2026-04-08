import { View, Text, Image, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/globalStyle';

type Props = {
  title: string;
};

export default function BookCard({ title }: Props) {
  return (
    <View style={globalStyles.card}>
      {/* First Division */}
      <View style={globalStyles.cardHeader}>
        <Text style={globalStyles.cardTitle}>{title}</Text>

        <View style={globalStyles.cardActions}>
          <Image
            source={require('../images/icons/gear.png')}
            style={globalStyles.cardIcon}
          />
          <Image
            source={require('../images/icons/bin.png')}
            style={globalStyles.cardIcon}
          />
        </View>
      </View>

      {/* Second Division */}
      <View style={globalStyles.cardBody}>
        <Image
          source={require('../images/testCover.jpg')}
          style={globalStyles.cardImage}
          resizeMode="contain"
        />

        <TouchableOpacity style={globalStyles.infoIconContainer}>
          <Image
            source={require('../images/icons/info.png')}
            style={globalStyles.cardIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}