import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import LocationList from '../components/LocationList';
import { FavoriteStackParamList } from '../routes/FavoriteStack';
import { useLocations } from '../stores/locations';

type FavoritesScreenProps = NativeStackScreenProps<
  FavoriteStackParamList,
  'Favorite'
>;

const FavoritesScreen = ({ navigation }: FavoritesScreenProps) => {
  const { locations, toggleFavorite } = useLocations();

  const favoriteLocations = useMemo(
    () => locations.filter((l) => l.isFavorite),
    [locations]
  );

  const handleLocationPress = (locationId: number) => {
    const location = favoriteLocations.find((l) => l.id === locationId);

    if (location) {
      navigation.navigate('Location', { location });
    }
  };

  return (
    <View style={styles.container}>
      <LocationList
        values={favoriteLocations}
        onLocationPress={handleLocationPress}
        onToggleFavorite={toggleFavorite}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default FavoritesScreen;
