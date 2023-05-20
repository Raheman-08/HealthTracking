import {Text, SafeAreaView, StyleSheet, View, TextInput} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Sign up now</Text>
        <Text style={styles.textPara}>Please fill the details and create account</Text>
      </View>

      <View style={styles.inputContainer}>
      <TextInput
            style={styles.textInput}
            placeholder="Name"
          />
          <TextInput
            style={styles.textInput}
            placeholder="Enter Your Email"
          />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  text: {
    color: 'black',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 18,
  },
  textPara: {
    fontSize: 18,
    color: '#7D848D',
    marginTop: 12
  },
  textContainer: {
    alignItems: 'center'
  },
  inputContainer: {
    marginTop: 20,
  },
  textInput: {
    borderRadius: 10,
    backgroundColor: '#F0F0F0',
    width: '100%',
    height: 56,
    marginTop: 20,
    padding: 10,
  },
});
