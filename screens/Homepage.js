import { useState } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Platform,
  Image,
  FlatList,
} from 'react-native';
import UserAvatar from 'react-native-user-avatar';
import Ionicons from 'react-native-vector-icons/Ionicons'

// const Card = ({item}) => {
//   <Text>{item.text}</Text>
// }

export default function App() {

  // const [data, setData] = useState ([
  //   {
  //     text: 'Hello'
  //   }
  // ]);

  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        {/* <Image source={require('../assets/avatar.png')} style={styles.avatar} /> */}
        <UserAvatar size={50} name="Raheman Ali" style={styles.avatar} />
      </View>
      <View style={styles.textHeader}>
        <Text style={styles.para}>Welcome Back</Text>
        <Text style={styles.header}>Raheman Ali</Text>
      </View>

      <View style={styles.search}>
        <TextInput style={styles.SearchBar} placeholder="Search" />
      </View>

      <View style={styles.contentHeading}>
        <Text style={styles.dataHeading}>Health Data</Text>
      </View>

      <View style={styles.containerBox}>
        <View style={styles.dataBox}>
          <Ionicons name='heart' style={styles.iconHeading} />
          <Text style={styles.iconHeading}>Heart Rate</Text>
        </View>
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
    flexDirection: 'row',
  },
  avatar: {
    height: 50,
    width: 50,
  },
  textHeader: {
    marginTop: 10,
  },
  para: {
    fontSize: 20,
    fontFamily: 'Urbanist-Medium',
    color: '#7E848D',
  },
  header: {
    fontSize: 30,
    color: '#000000',
    fontFamily: 'Urbanist-Bold',
  },
  SearchBar: {
    height: 52,
    width: '100%',
    borderWidth: 1,
    borderColor: '#8991A4',
    borderRadius: 16,
    padding: 8,
    marginTop: 15,
    fontFamily: 'Urbanist-Medium',
    backgroundColor: '#F5F5F5',
    paddingLeft: 20,
  },
  contentHeading: {
    marginTop: 18
  },
  dataHeading: {
    fontSize: 26,
    fontFamily: 'Urbanist-Bold',
    color: '#1A7973'
  },
  containerBox: {
    marginTop: 10,
    flexDirection: 'row'
  },
  dataBox: {
    borderRadius: 15,
    backgroundColor: '#000000',
    padding: 14
  },
  measureType: {
    fontSize: 20,
    fontFamily: 'Urbanist-Medium',
    color: 'white'
  },
  iconHeading: {
    fontSize: 24,
    color: '#1A7973'
  }
});
