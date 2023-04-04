import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FeatherIcon from 'react-native-vector-icons/Feather';

import StackRoutes from './Stack';
import FavoritesScreen from '../screens/FavoritesScreen';

export type BottomTabParamList = {
  Home: undefined;
  Favorites: undefined;
};

const { Navigator, Screen } = createBottomTabNavigator<BottomTabParamList>();

const BottomTabRoutes = () => {
  return (
    <Navigator initialRouteName="Home">
      <Screen name="Home" component={StackRoutes} />
      <Screen name="Favorites" component={FavoritesScreen} />
    </Navigator>
  );
};

export default BottomTabRoutes;
