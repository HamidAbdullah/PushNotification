import React, {useEffect} from 'react';
import {
  NotificationServices,
  requestUserPermission,
} from './src/utils/PushNotifications';
import ScreenRoute from './src/screens/Nevigation/Route';

const App = () => {
  useEffect(() => {
    requestUserPermission();
    NotificationServices();
  }, []);
  return <ScreenRoute />;
};

export default App;
