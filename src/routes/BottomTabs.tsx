import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import StackRoutes from './Stack';

export type BottomTabParamList = {
  Home: undefined;
  Favorites: undefined;
};

const { Navigator, Screen } = createBottomTabNavigator<BottomTabParamList>();

const BottomTabRoutes = () => {
  return (
    <Navigator initialRouteName="Home">
      <Screen name="Home" component={StackRoutes} />
      <Screen name="Favorites" component={StackRoutes} />
    </Navigator>
  );
};

export default BottomTabRoutes;
