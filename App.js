import React, {useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {
  NotificationServices,
  requestUserPermission,
} from './src/utils/PushNotifications';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const removeFcm = async () => {
    await AsyncStorage.removeItem('fcmToken');
    console.log('Key removed successfully.');
  };

  useEffect(() => {
    requestUserPermission();
    NotificationServices();
  }, []);
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.textStyle}>App</Text>
      <TouchableOpacity onPress={removeFcm}>
        <View style={styles.buttonViewStyles}>
          <Text style={styles.buttonStyles}>Remove Fcm</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 50,
  },
  buttonStyles: {
    color: 'white',
  },
  buttonViewStyles: {
    backgroundColor: 'blue',
    padding: 10,
  },
});
