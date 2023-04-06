/* eslint-disable react/no-unstable-nested-components */
import 'react-native-gesture-handler';
import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigatorScreenParams } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import FavoriteStackRoutes, { FavoriteStackParamList } from './FavoriteStack';
import HomeStackRoutes, { HomeStackParamList } from './HomeStack';

export type BottomTabParamList = {
  HomeStack: NavigatorScreenParams<HomeStackParamList>;
  FavoriteStack: NavigatorScreenParams<FavoriteStackParamList>;
};

const { Navigator, Screen } =
  createMaterialBottomTabNavigator<BottomTabParamList>();

const BottomTabRoutes = () => {
  return (
    <Navigator initialRouteName="HomeStack">
      <Screen
        name="HomeStack"
        component={HomeStackRoutes}
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name={focused ? 'home' : 'home-outline'}
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Screen
        name="FavoriteStack"
        component={FavoriteStackRoutes}
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name={focused ? 'star' : 'star-outline'}
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Navigator>
  );
};

export default BottomTabRoutes;
