import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import LocationScreen from '../screens/LocationScreen';

export type RootStackParamList = {
  Home: undefined;
  Location: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

const StackRoutes = () => {
  return (
    <Navigator initialRouteName="Home">
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Location" component={LocationScreen} />
    </Navigator>
  );
};

export default StackRoutes;
