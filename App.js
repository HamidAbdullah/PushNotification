/* eslint-disable no-alert */
import React, {useEffect} from 'react';
import {
  NotificationServices,
  requestUserPermission,
} from './src/utils/PushNotifications';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import ScreenRoute from './src/screens/Nevigation/Route';
import NavigationService from './src/screens/Nevigation/NavigationService';

const App = () => {
  const handleDynamicLink = link => {
    // Handle dynamic link inside your own application
    try {
      const navigationLink = link.url.split('/').pop().split('%2F').pop();

      if (navigationLink !== '') {
        NavigationService.navigate(navigationLink);
      } else {
        alert('Link not found');
      }
    } catch (error) {
      console.log(error);
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
        try {
          const navigationLink = link.url.split('/').pop().split('%2F').pop();

          if (navigationLink) {
            NavigationService.navigate(navigationLink);
          } else {
            alert('Link not found');
          }
        } catch (error) {
          console.log(error);
        }
      });
  }, []);

  useEffect(() => {
    requestUserPermission();
    NotificationServices();
  }, []);
  return <ScreenRoute />;
};

export default App;
