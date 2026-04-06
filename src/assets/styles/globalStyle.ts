import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDE7F6',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  box: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  imageBox: {
    width: '80%',
    height: 150,
    backgroundColor: '#DDD',
    borderRadius: 12,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'CustomFontRegular'
  },
  Highlighted: {
    fontSize: 24,
    color: '#000',
    fontFamily: 'CustomFontBold'
  }
});