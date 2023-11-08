import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import surahsData from '../../constants/surahData';
import recitersData from '../../constants/reciterData';

const TilawatListItem = ({item, index, data, currentReciterName}) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('audioScreen', {
      data: item,
      index,
      reciters: recitersData,
      surahs: surahsData,
      currentReciterName: currentReciterName,
    });
  };

  return (
    <TouchableOpacity
      style={[
        styles.container,
        // {marginBottom: index === data.length - 1 ? 30 : 0},
      ]}
      onPress={handlePress}>
      <View style={styles.nameView}>
        <Text style={styles.name}>{item.title}</Text>
        <Text style={styles.name}>{currentReciterName.name}</Text>
      </View>
      <View style={styles.play}>
        <Icon
          name="play"
          size={30}
          color="#000"
          onPress={() => console.log('press')}
        />
      </View>
    </TouchableOpacity>
  );
};

export default TilawatListItem;

const styles = StyleSheet.create({
  container: {
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 10,
    marginTop: 20,
    marginHorizontal: 15,
    justifyContent: 'space-around',
  },
  tilawatImage: {
    width: 50,
    height: 50,
    borderRadius: 30,
    marginLeft: 5,
  },
  nameView: {
    paddingRight: 20,
    width: '55%',
    marginTop: 10,
  },
  name: {
    fontSize: 14,
    fontWeight: '900',
    color: '#000',
  },
  play: {
    marginRight: 10,
  },
});
