import dynamicLinks from '@react-native-firebase/dynamic-links';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import Clipboard from '@react-native-community/clipboard';

const DeepLinkFireBase = () => {
  const [genrateLink, setGenrateLink] = useState('');

  const buildLink = async () => {
    const link = await dynamicLinks().buildLink({
      link: 'https://invertase.io/offer',
      // domainUriPrefix is created in your Firebase console
      domainUriPrefix: 'https://pushnotificationsjs12.page.link',
      // optional setup which updates Firebase analytics campaign
      // "banner". This also needs setting up before hand
      analytics: {
        campaign: 'banner',
      },
    });

    setGenrateLink(link);
  };

  const handleDynamicLink = link => {
    // Handle dynamic link inside your own application
    if (link.url === 'https://invertase.io/offer') {
      console.log('hello');
    }
  };

  useEffect(() => {
    const unsubscribe = dynamicLinks().onLink(handleDynamicLink);
    // When the component is unmounted, remove the listener
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    dynamicLinks()
      .getInitialLink()
      .then(link => {
        if (link.url === 'https://invertase.io/offer') {
          // ...set initial route as offers screen
        }
      });
  }, []);

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
