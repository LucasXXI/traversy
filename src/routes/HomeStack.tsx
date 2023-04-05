/* eslint-disable react/no-unstable-nested-components */
import 'react-native-gesture-handler';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import NavigationBar from '../components/NavigationBar';
import HomeScreen from '../screens/HomeScreen';
import LocationScreen from '../screens/LocationScreen';

type LocationParams = {
  location: Location;
};

export type HomeStackParamList = {
  Home: undefined;
  Location: LocationParams;
};

const { Navigator, Screen } = createNativeStackNavigator<HomeStackParamList>();

const HomeStackRoutes = () => {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        header: (props) => <NavigationBar {...props} />,
      }}
    >
      <Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Inicio' }}
      />
      <Screen
        name="Location"
        component={LocationScreen}
        options={{ title: 'Local' }}
      />
    </Navigator>
  );
};

export default HomeStackRoutes;
