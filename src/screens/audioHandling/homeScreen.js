import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TilawatListItem from './audioTrackerPlayer';
import surahsData from '../../constants/surahData';
import recitersData from '../../constants/reciterData';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation, useIsFocused} from '@react-navigation/native';

const Home = () => {
  const [currentReciterName, setCurrentReciterName] = useState({});
  const isFocused = useIsFocused();

  useEffect(() => {
    getReciter();
  }, [isFocused]);

  const getReciter = async () => {
    const savedQari = await AsyncStorage.getItem('selectedQari');
    setCurrentReciterName(JSON.parse(savedQari));
  };

  const navigation = useNavigation();

  const renderTilawatListItem = ({item, index}) => (
    <TilawatListItem
      item={item}
      index={index}
      data={surahsData}
      reciters={recitersData}
      currentReciterName={currentReciterName}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>Quran App</Text>
        <Icon
          name="settings"
          size={30}
          color="#000"
          style={styles.setting}
          onPress={() => navigation.navigate('Setting')}
        />
      </View>
      <FlatList
        data={surahsData}
        renderItem={renderTilawatListItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 60,
    backgroundColor: '#fff',
    width: '100%',
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logo: {
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
    marginLeft: 15,
    marginTop: 15,
  },
  setting: {
    marginRight: 20,
    marginTop: 15,
  },
  currentReciterName: {
    color: 'black',
    fontSize: 20,
  },
});
