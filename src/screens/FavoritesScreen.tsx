import React from 'react';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View } from 'react-native';

import { BottomTabParamList } from '../routes/BottomTabs';

type FavoritesScreenProps = BottomTabScreenProps<
  BottomTabParamList,
  'Favorites'
>;

const FavoritesScreen = ({ navigation }: FavoritesScreenProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Favorites Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default FavoritesScreen;
