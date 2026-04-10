import { View, Text, Image, TouchableOpacity } from 'react-native';
import { createGlobalStyles } from '../styles/globalStyle';
import { useTheme } from '../../context/ThemeContext';

type Props = {
  title: string;
};

export default function BookCard({ title }: Props) {
  const { theme } = useTheme();
  const styles = createGlobalStyles(theme);

  return (
    <View style={styles.card}>
      {/* First Division */}
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>{title}</Text>

        <View style={styles.cardActions}>
          <Image
            source={require('../images/icons/gear.png')}
            style={styles.iconSm}
          />
          <Image
            source={require('../images/icons/bin.png')}
            style={styles.iconSm}
          />
        </View>
      </View>

      {/* Second Division */}
      <View style={styles.cardBody}>
        <Image
          source={require('../images/testCover.jpg')}
          style={styles.cardImage}
          resizeMode="contain"
        />

        <TouchableOpacity style={styles.infoIconContainer}>
          <Image
            source={require('../images/icons/info.png')}
            style={styles.iconSm}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}