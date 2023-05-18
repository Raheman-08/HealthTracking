import {Text, View, SafeAreaView, StyleSheet} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.appContainer}>
      <View>
        <Text style={styles.logoContainer}>Health Stats</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  logoContainer:{
    fontSize: 36,
    color: 'red',
    fontWeight: 'bold',

  }
});
