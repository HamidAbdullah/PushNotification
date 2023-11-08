import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({navigation}) => {
  // const removeFcm = async () => {
  //   await AsyncStorage.removeItem('fcmToken');
  //   console.log('Key removed successfully.');
  // };

  return (
    <View>
      <Text style={styles.textStyle}>HomeScreen</Text>
      <View style={styles.innerViewStyle}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <View style={styles.buttonViewStyles}>
            <Text style={styles.buttonStyles}>Profile Screen </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
          <View style={styles.buttonViewStyles}>
            <Text style={styles.buttonStyles}>Setting</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('audioHandling')}>
          <View style={styles.buttonViewStyles}>
            <Text style={styles.buttonStyles}>Audio Tracker Player</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('other')}>
          <View style={styles.buttonViewStyles}>
            <Text style={styles.buttonStyles}>Other Screens</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    marginTop: 10,
    color: 'black',
    textAlign: 'center',
    fontWeight: '900',
  },
  buttonStyles: {
    color: 'white',
    padding: 10,
    fontWeight: '900',
  },
  buttonViewStyles: {
    paddingHorizontal: 40,
    paddingVertical: 10,
    backgroundColor: 'green',
    alignItems: 'center',
    borderRadius: 30,
    marginVertical: 30,
    marginHorizontal: 20,
  },
});
