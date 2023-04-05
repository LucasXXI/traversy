/* eslint-disable react/no-unstable-nested-components */
import 'react-native-gesture-handler';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FavoritesScreen from '../screens/FavoritesScreen';
import NavigationBar from '../components/NavigationBar';
import LocationScreen from '../screens/LocationScreen';

type LocationParams = {
  location: Location;
  isFavorite: boolean;
};

export type FavoriteStackParamList = {
  Favorite: undefined;
  Location: LocationParams;
};

const { Navigator, Screen } =
  createNativeStackNavigator<FavoriteStackParamList>();

const FavoriteStackRoutes = () => {
  return (
    <Navigator
      initialRouteName="Favorite"
      screenOptions={{
        header: (props) => <NavigationBar {...props} />,
      }}
    >
      <Screen
        name="Favorite"
        component={FavoritesScreen}
        options={{ title: 'Favoritos' }}
      />
      <Screen
        name="Location"
        component={LocationScreen}
        options={{ title: 'Local' }}
      />
    </Navigator>
  );
};

export default FavoriteStackRoutes;
