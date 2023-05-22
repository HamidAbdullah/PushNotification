import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ProfileDetail = () => {
  return (
    <View>
      <Text style={styles.textStyle}>ProfileDetail</Text>
    </View>
  );
};

export default ProfileDetail;

const styles = StyleSheet.create({
  textStyle: {
    color: 'black',
    marginTop: 20,
    fontSize: 50,
  },
});
