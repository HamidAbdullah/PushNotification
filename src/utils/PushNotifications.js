import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';

/**
 * This code is a function that requests permission from the user
 *  to receive push notifications using the FCM SDK. If the user
 *  grants permission, it logs the authorization status to the
 *  console and calls another function to retrieve the FCM token.
 */

export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    getFcmToken();
  }
}

/**
 * This code is a function that retrieves the FCM token for the
 * device from local storage or generates a new token if it does
 * not exist or has expired. If a new token is generated, it is
 *  stored in local storage. The function logs the value of the
 *  token to the console for debugging purposes.
 */

const getFcmToken = async () => {
  let fcmToken = await AsyncStorage.getItem('fcmToken');
  console.log('Old fcm Token: ', fcmToken);
  if (!fcmToken) {
    try {
      const fcmToken = await messaging().getToken();
      if (fcmToken) {
        console.log('New genrated fcm Token: ', fcmToken);
        await AsyncStorage.setItem('fcmToken', fcmToken);
      }
    } catch (error) {
      console.log('error in fcm Token', error);
    }
  }
};

export const NotificationServices = () => {
  // Assume a message-notification contains a "type" property in the data payload of the screen to open

  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,
    );
  });

  // Foreground message handling
  messaging().onMessage(async remoteMessage => {
    console.log('Notifications in foreground: ', remoteMessage);
  });

  // Check whether an initial notification is available
  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage.notification,
        );
      }
    });
};
