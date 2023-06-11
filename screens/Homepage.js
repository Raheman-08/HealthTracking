import {useState} from 'react';
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
  StatusBar,
} from 'react-native';
import UserAvatar from 'react-native-user-avatar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Entypo from 'react-native-vector-icons/Entypo'

// const Card = ({item}) => {
//   <Text>{item.text}</Text>
// }

export default function App() {

  const card = [
    {
      Measuretype: 'Heart Rate',
      Measurement: '40',
      Unit: 'BPM',
    },

    {
      Measuretype: 'Blood Oxygen',
      Measurement: '100',
      Unit: 'SPO2',
    },

    {
      Measuretype: 'Stress Level',
      Measurement: '100',
      Unit: 'SPO2',
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        {/* <Image source={require('../assets/avatar.png')} style={styles.avatar} /> */}
        <UserAvatar size={50} name="Raheman Ali" style={styles.avatar} />
      </View>
      <View style={styles.textHeader}>
        <Text style={styles.para}>Welcome Back</Text>
        <Text style={styles.txtHeader}>Raheman Ali</Text>
      </View>

      <View style={styles.search}>
        <TextInput
          style={styles.SearchBar}
          placeholder="Search"
          placeholderTextColor="#fff"
        />
      </View>

      <View style={styles.contentHeading}>
        <Text style={styles.dataHeading}>Health Data</Text>
      </View>

      <View style={styles.containerBox}>
        <View style={styles.dataBox}>
          <Ionicons name="heart" style={styles.iconHeading} />
          <Text style={styles.measureHeading}>Heart Rate</Text>
          <Text style={styles.healthData}>40</Text>
          <Text style={styles.para}>bpm</Text>
        </View>

        <View style={styles.dataBoxe}>
          <Fontisto
            name="blood-drop"
            style={styles.iconHeading}
          />
          <Text style={styles.measureHeading}>Blood Oxygen</Text>
          <Text style={styles.healthData}>100</Text>
          <Text style={styles.para}>spo2</Text>
        </View>
      </View>

      <View style={styles.containerBox}>
        <View style={styles.dataBox}>
          <Entypo name="flash" style={styles.iconHeading} />
          <Text style={styles.measureHeading}>Stress Level</Text>
          <Text style={styles.healthData}>40</Text>
          <Text style={styles.para}>bpm</Text>
        </View>

        <View style={styles.dataBoxe}>
          <Foundation
            name="foot"
            style={styles.iconHeading}
          />
          <Text style={styles.stepmeasureHeading}>Your Steps</Text>
          <Text style={styles.healthData}>100</Text>
          <Text style={styles.para}>steps</Text>
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
    backgroundColor: 'black',
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
  txtHeader: {
    fontSize: 30,
    color: '#ffffff',
    fontFamily: 'Urbanist-Bold',
  },
  SearchBar: {
    height: 52,
    width: '100%',
    borderWidth: 1,
    // borderColor: '#8991A4',
    borderRadius: 16,
    padding: 8,
    marginTop: 15,
    fontFamily: 'Urbanist-Medium',
    backgroundColor: '#262626',
    paddingLeft: 20,
  },
  contentHeading: {
    marginTop: 18,
  },
  dataHeading: {
    fontSize: 26,
    fontFamily: 'Urbanist-Bold',
    color: '#ffffff',
  },
  containerBox: {
    marginTop: 10,
    flexDirection: 'row',
  },
  dataBox: {
    borderRadius: 15,
    backgroundColor: '#1A1A1A',
    padding: 24,
    marginTop: 10,
    paddingHorizontal: 20,
  },
  dataBoxe: {
    borderRadius: 15,
    backgroundColor: '#1A1A1A',
    padding: 24,
    marginTop: 10,
    paddingHorizontal: 20,
    marginLeft: 17,
  },
  measureType: {
    fontSize: 20,
    fontFamily: 'Urbanist-Medium',
    color: 'white',
  },
  iconHeading: {
    fontSize: 35,
    color: '#FF3559',
  },
  measureHeading: {
    fontSize: 25,
    fontFamily: 'Urbanist-SemiBold',
    color: 'white',
    marginTop: 10,
  },
  stepmeasureHeading: {
    fontSize: 25,
    fontFamily: 'Urbanist-SemiBold',
    color: 'white',
    marginTop: 10,
    width: 150
  },
  healthData: {
    fontSize: 30,
    fontFamily: 'Urbanist-Bold',
    color: 'white',
    marginTop: 15,
  },
});
