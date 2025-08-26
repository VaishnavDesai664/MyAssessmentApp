import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: { fontSize: 24, marginBottom: 20 },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
  },

  flexContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  postCard: {
    backgroundColor: '#f8f8f8',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
  },
  postTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  postBody: {
    fontSize: 14,
    color: '#555',
  },
  footerBar: {
    padding: 15,
    backgroundColor: '#eee',
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 6,
  },
  footerText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '600',
  },

  containerDetails: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  postCardDetails: {
    backgroundColor: '#f8f8f8',
    padding: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  postTitleDetails: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#222',
  },
  postBodyDetails: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },

  containerCounter: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  counterTextCounter: {
    fontSize: 40,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  buttonRowCounter: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
export default styles;
