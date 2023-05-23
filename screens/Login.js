import {
    Text,
    SafeAreaView,
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
  } from 'react-native';
  
  export default function App() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Sign in now</Text>
          <Text style={styles.textPara}>
          Please sign in to continue our app
          </Text>
        </View>
  
        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} placeholder="Enter Your Email" />
          <TextInput style={styles.textInput} placeholder="Password" />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textBtn}>Submit</Text>
          </TouchableOpacity>
        </View>
  
        <View style={styles.loginText}>
          <Text style={styles.accntText}>Don't Have An Account?</Text>
          <Text style={styles.loginLink}>Sign Up</Text>
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
      marginTop: 12,
    },
    textContainer: {
      alignItems: 'center',
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
    button: {
      padding: 8,
      borderRadius: 16,
      backgroundColor: '#1A7973',
      marginTop: 30,
    },
    textBtn: {
      fontSize: 18,
      padding: 12,
      textAlign: 'center',
      color: 'white',
    },
    loginText: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 30
    },
    accntText: {
      fontSize: 15,
      color: '#000000'
    },
    loginLink: {
      fontSize: 15,
      color: '#1A7973',
      marginLeft: 8
    }
  });
  