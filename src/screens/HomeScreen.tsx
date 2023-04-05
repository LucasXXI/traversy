import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, View } from 'react-native';

import LocationList from '../components/LocationList';
import { HomeStackParamList } from '../routes/HomeStack';
import { useLocations } from '../stores/locations';

type HomeScreenProps = NativeStackScreenProps<HomeStackParamList, 'Home'>;

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const { locations, toggleFavorite } = useLocations();

  const handleLocationPress = (locationId: number) => {
    const location = locations.find((l) => l.id === locationId);

    if (location) {
      navigation.navigate('Location', { location });
    }
  };

  return (
    <View style={styles.container}>
      <LocationList
        values={locations}
        onLocationPress={handleLocationPress}
        onToggleFavorite={toggleFavorite}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default HomeScreen;
