import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F9F9F9',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#6200EE',
    marginBottom: 20,
    textAlign: 'center',
  },
  animation: {
    width: width * 0.8,
    height: height * 0.3,
    alignSelf: 'center',
  },
  input: {
    width: '90%',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginVertical: 5,
  },
  button: {
    backgroundColor: '#6200EE',
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  responseText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
  },
  questionContainer: {
    marginTop: 15,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#ECECEC',
  },
  questionText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
