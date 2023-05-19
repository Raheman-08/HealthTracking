import {Text, View, SafeAreaView, StyleSheet, Image} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../assets/heartl.png')} style={styles.logoContainer} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1A7973',
  },
  logoContainer:{
    width: 100,
    height: 100,
  }
});
