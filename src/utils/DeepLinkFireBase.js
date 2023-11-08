import dynamicLinks from '@react-native-firebase/dynamic-links';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Clipboard from '@react-native-community/clipboard';

const DeepLinkFireBase = ({imageLink}) => {
  console.log('Image Link :', imageLink);
  const [genrateLink, setGenrateLink] = useState('');

  const buildLink = async () => {
    const link = await dynamicLinks().buildLink({
      link: `https://invertase.io/${imageLink}`,
      // domainUriPrefix is created in your Firebase console
      domainUriPrefix: 'https://deeplinking10.page.link',
      // optional setup which updates Firebase analytics campaign
      // "banner". This also needs setting up before hand
      analytics: {
        campaign: 'banner',
      },
    });

    setGenrateLink(link);
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          buildLink();
        }}>
        <View style={styles.buttonViewStyles}>
          <Text style={styles.buttonStyles}>genrateLink</Text>
        </View>
      </TouchableOpacity>
      <Text style={styles.textStyle}>{genrateLink}</Text>
      <TouchableOpacity
        onPress={() => {
          Clipboard.setString(genrateLink);
        }}>
        <View style={styles.buttonViewStyles}>
          <Text style={styles.buttonStyles}>copy Link</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default DeepLinkFireBase;

const styles = StyleSheet.create({
  buttonStyles: {
    color: 'white',
  },
  buttonViewStyles: {
    padding: 20,
    backgroundColor: 'green',
    alignItems: 'center',
    borderRadius: 30,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  textStyle: {
    color: 'black',
    fontSize: 20,
    marginHorizontal: 20,
    // marginVertical: 20,
  },
});
