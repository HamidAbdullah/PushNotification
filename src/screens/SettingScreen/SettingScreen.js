import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const SettingScreen = () => {
  return (
    <View>
      <Text style={styles.textStyle}>SettingScreen</Text>
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  textStyle: {
    color: 'black',
    marginTop: 20,
    fontSize: 50,
  },
});
