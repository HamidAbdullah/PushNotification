import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import recitersData from '../../constants/reciterData';

const Setting = () => {
  const [selectedQari, setSelectedQari] = useState(null);
  useEffect(() => {
    getReciter();
  }, []);

  const setRectier = async qari => {
    try {
      await AsyncStorage.setItem('selectedQari', JSON.stringify(qari));
    } catch (error) {
      console.log('error:', error);
    }
  };

  const getReciter = async () => {
    try {
      const savedQari = await AsyncStorage.getItem('selectedQari');
      if (savedQari) {
        const parsedQari = JSON.parse(savedQari);
        setSelectedQari(parsedQari);
      }
    } catch (error) {
      console.log('error:', error);
    }
  };

  const handleReciter = qari => {
    setSelectedQari(qari);
    setRectier(qari);
  };

  return (
    <View>
      {recitersData.map(qari => (
        <TouchableOpacity
          key={qari.id}
          onPress={() => handleReciter(qari)}
          style={styles.button}>
          <Text style={styles.name}>{qari.name}</Text>
        </TouchableOpacity>
      ))}
      <Text style={styles.button}>
        Selected Reciter:{' '}
        {selectedQari ? selectedQari.name : 'Abdul Rehman Al Sudais'}
      </Text>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  imageStyle: {
    height: 50,
    width: 50,
  },
  name: {
    color: 'black',
    fontWeight: '900',
  },
  button: {
    flexDirection: 'row',
    padding: 10,
    marginHorizontal: 30,
    alignSelf: 'center',
    backgroundColor: '#fff',
    elevation: 5,
    borderRadius: 10,
    marginVertical: 10,
  },
});
