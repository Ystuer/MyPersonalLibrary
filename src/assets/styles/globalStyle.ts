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
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
  button: {
    backgroundColor: '#7C4DFF',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  link: {
    color: '#7C4DFF',
    textAlign: 'center',
    marginTop: 15,
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginBottom: 5,
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