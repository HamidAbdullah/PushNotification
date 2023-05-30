import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import DeepLinkFireBase from '../../utils/DeepLinkFireBase';

const SettingScreen = () => {
  const image =
    'https://img.freepik.com/free-vector/isolated-tree-white-background_1308-26130.jpg?w=996&t=st=1685424746~exp=1685425346~hmac=794a48f508e342c12de67aa28c06a98a2cf6c813465cf9a452c3767af7ea0926';
  return (
    <View>
      <Text style={styles.textStyle}>SettingScreen</Text>
      <Image source={{uri: image}} style={{width: 400, height: 400}} />
      <DeepLinkFireBase imageLink={'Setting'} />
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
