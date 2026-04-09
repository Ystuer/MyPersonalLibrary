import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDE7F6',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  box: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  section: {
    width: '100%',
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
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
    marginTop: 5,
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
  },
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#7C4DFF',
  },
  headerCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerImage: {
    width: 30,
    height: 30,
  },
  headerTitle: {
    fontSize: 22,
    fontFamily: 'CustomFontBold'
  },
  optionsContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  optionCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionIcon: {
    width: 24,
    height: 24,
  },
  searchInput: {
    flex: 1,
    marginHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 15,
    height: 50,
  },
  galleryContainer: {
    flex: 1,
    width: '100%',
  },
  galleryContent: {
    paddingVertical: 10,
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    margin: 5,
  },
    footerContainer: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 10,
  },
  footerButton: {
    backgroundColor: '#7C4DFF',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: 'center',
  },
  cardHeader: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
  },
  cardActions: {
    flexDirection: 'row',
    gap: 10,
  },
  cardIcon: {
    width: 20,
    height: 20,
  },
  cardBody: {
    width: '100%',
    position: 'relative',
  },
  cardImage: {
    width: '100%',
    height: 120,
    borderRadius: 12,
  },
  infoIconContainer: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
  },
  sectionTitle: {
  fontSize: 16,
  fontWeight: 'bold',
  marginBottom: 10,
  },
  placeholderBox: {
    width: '100%',
    height: 100,
    backgroundColor: '#DDD',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  genreContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  genreItem: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 20,
    backgroundColor: '#eee',
  },
  genreItemSelected: {
    backgroundColor: '#7C4DFF',
  },
  genreTextSelected: {
    color: '#fff',
  },
  buttonRow: {
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  },
  secondaryButton: {
    backgroundColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginRight: 5,
  },
  secondaryButtonText: {
    color: '#000',
  },
});