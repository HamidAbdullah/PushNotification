import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({navigation}) => {
  const removeFcm = async () => {
    await AsyncStorage.removeItem('fcmToken');
    console.log('Key removed successfully.');
  };

  return (
    <View>
      <Text style={styles.textStyle}>HomeScreen</Text>
      <View style={styles.innerViewStyle}>
        <TouchableOpacity onPress={removeFcm}>
          <View style={styles.buttonViewStyles}>
            <Text style={styles.buttonStyles}>Remove Fcm</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <View style={styles.buttonViewStyles}>
            <Text style={styles.buttonStyles}>Profile </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
          <View style={styles.buttonViewStyles}>
            <Text style={styles.buttonStyles}>Setting</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 50,
    marginTop: 50,
    color: 'black',
  },
  buttonStyles: {
    color: 'white',
  },
  buttonViewStyles: {
    backgroundColor: 'blue',
    padding: 10,
  },
  innerViewStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
