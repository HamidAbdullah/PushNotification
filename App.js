import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  NotificationServices,
  requestUserPermission,
} from './src/utils/PushNotifications';

const App = () => {
  useEffect(() => {
    requestUserPermission();
    NotificationServices();
  }, []);
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.textStyle}>App</Text>
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
});
