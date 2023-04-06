/* eslint-disable react-native/no-inline-styles */
import React, { useMemo } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

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
    navigation.navigate('Location', { locationId });
  };

  return (
    <View style={styles.container}>
      {favoriteLocations.length === 0 ? (
        <View style={styles.empty}>
          <Text variant="titleLarge" style={{ marginBottom: 16 }}>
            Sem localizações favoritas
          </Text>
          <Text
            variant="labelLarge"
            style={{ width: '80%', textAlign: 'center' }}
          >
            Adicione localizações favoritas para encontrá-las mais rápido
          </Text>
        </View>
      ) : (
        <LocationList
          values={favoriteLocations}
          onLocationPress={handleLocationPress}
          onToggleFavorite={toggleFavorite}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});

export default FavoritesScreen;
