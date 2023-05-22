import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../HomeScreen/HomeScreen';
import SettingScreen from '../SettingScreen/SettingScreen';
import NavigationService from './NavigationService';
import ProductDetail from '../Product/ProductDetail';
import ProfileDetail from '../Profile/ProfileDetail';

const Stack = createNativeStackNavigator();

const ScreenRoute = () => (
  <NavigationContainer ref={ref => NavigationService.setTopLevelNavigator(ref)}>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Setting" component={SettingScreen} />
      <Stack.Screen name="Product" component={ProductDetail} />
      <Stack.Screen name="Profile" component={ProfileDetail} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default ScreenRoute;
