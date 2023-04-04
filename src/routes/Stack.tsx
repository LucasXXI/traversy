import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import LocationScreen from '../screens/LocationScreen';

type LocationParams = {
  location: {
    id: number;
    title: string;
    description: string;
    image: string;
    price: number;
  }
  isFavorite: boolean;
}

export type RootStackParamList = {
  Home: undefined;
  Location: LocationParams;
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
