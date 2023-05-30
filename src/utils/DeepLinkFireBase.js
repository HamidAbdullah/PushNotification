import dynamicLinks from '@react-native-firebase/dynamic-links';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Clipboard from '@react-native-community/clipboard';

const DeepLinkFireBase = ({imageLink}) => {
  const [genrateLink, setGenrateLink] = useState('');

  const buildLink = async () => {
    const link = await dynamicLinks().buildLink({
      link: `https://invertase.io/${imageLink}`,
      // domainUriPrefix is created in your Firebase console
      domainUriPrefix: 'https://pushnotifications12.page.link',
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
      <Text style={styles.textStyle}>{genrateLink}</Text>
      <TouchableOpacity
        onPress={() => {
          buildLink();
        }}>
        <View style={styles.buttonViewStyles}>
          <Text style={styles.buttonStyles}>genrateLink</Text>
        </View>
      </TouchableOpacity>
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
    backgroundColor: 'blue',
    padding: 10,
  },
  textStyle: {
    color: 'black',
  },
});
