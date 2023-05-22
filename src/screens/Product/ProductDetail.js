import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ProductDetail = () => {
  return (
    <View>
      <Text style={styles.textStyle}>ProductDetail</Text>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  textStyle: {
    color: 'black',
    fontSize: 50,
  },
});
