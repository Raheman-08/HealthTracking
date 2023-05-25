import {
    Text,
    SafeAreaView,
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    Platform,
    Image
  } from 'react-native';
   
  
  export default function App() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
        <Image source={require('../assets/avatar.png')} style={styles.avatar} />
        {/* <<Image source={require('../assets/avatar.png')} style={styles.iconNotification} />> */}
        </View>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 20,
      paddingHorizontal: 16,
    },
    header: {
        flexDirection: 'row'
    },
    logoContainer: {
        height: 50,
        width: 50,
    },
    iconNotification: {
        height: 50,
        width: 50,
        
    }
  });
  