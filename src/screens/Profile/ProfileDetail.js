import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import DeepLinkFireBase from '../../utils/DeepLinkFireBase';

const ProfileDetail = () => {
  const image = 'https://picsum.photos/id/237/200/300';
  return (
    <View>
      <Text style={styles.textStyle}>ProfileDetail</Text>
      <Image source={{uri: image}} style={styles.imgStyle} />
      <DeepLinkFireBase imageLink={'Profile'} />
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
  imgStyle: {
    width: 370,
    height: 250,
  },
});
