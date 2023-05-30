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
      console.log('app link is .............', link.url);
      const navigationLink = link.url.split('/').pop().split('%2F').pop();
      console.log('profile ........  ', navigationLink);
      if (link || link.url === `https://invertase.io/offer${imageLink}`) {
        NavigationService.navigate(navigationLink);
      } else {
        // eslint-disable-next-line no-alert
        alert('Link not found');
      }
    } catch (error) {
      console.log('link is .............', link.url);
      console.log('error found in handleDynamicLink in app', error);
    }
  };

  useEffect(() => {
    const unsubscribe = dynamicLinks().onLink(handleDynamicLink);
    // When the component is unmounted, remove the listener
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    requestUserPermission();
    NotificationServices();
  }, []);
  return <ScreenRoute />;
};

export default App;
