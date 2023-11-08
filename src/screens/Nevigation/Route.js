import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import HomeScreen from '../HomeScreen/HomeScreen';
// import SettingScreen from '../SettingScreen/SettingScreen';
import NavigationService from './NavigationService';
// import ProfileDetail from '../Profile/ProfileDetail';
import audioTrackerPlayer from '../audioHandling/audioTrackerPlayer';
import AudioScreens from '../audioHandling/audio';
// import IndexScreen from '../other';
import Home from '../audioHandling/homeScreen';
import Setting from '../SettingScreen/SettingScreen';
const Stack = createNativeStackNavigator();

const ScreenRoute = () => (
  <NavigationContainer ref={ref => NavigationService.setTopLevelNavigator(ref)}>
    <Stack.Navigator>
      {/* <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Setting" component={SettingScreen} /> */}
      <Stack.Screen
        name="HomeScreen"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen name="audioHandling" component={audioTrackerPlayer} />
      <Stack.Screen name="audioScreen" component={AudioScreens} />
      <Stack.Screen name="Setting" component={Setting} />
      {/* <Stack.Screen name="Profile" component={ProfileDetail} /> */}
    </Stack.Navigator>
  </NavigationContainer>
);

export default ScreenRoute;
