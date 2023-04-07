import React, { useMemo } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Image, StyleSheet, View } from 'react-native';
import { Chip, IconButton, Surface, Text } from 'react-native-paper';

import { ScrollView } from 'react-native-gesture-handler';
import { FavoriteStackParamList } from '../routes/FavoriteStack';
import { HomeStackParamList } from '../routes/HomeStack';
import { useLocations } from '../stores/locations';

type LocationScreenProps = NativeStackScreenProps<
  HomeStackParamList | FavoriteStackParamList,
  'Location'
>;

const LocationScreen = ({ route }: LocationScreenProps) => {
  const { locationId } = route.params;
  const { toggleFavorite, locations } = useLocations();

  const location = useMemo(
    () => locations.find((l) => l.id === locationId)!,
    [locationId, locations]
  );

  const averageRating = (rating: number[]) => {
    const avg = rating.reduce((a, b) => a + b, 0) / location.rating.length;
    return avg.toFixed(1);
  };

  const convertCurrency = (price: number) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: location.imageUrl }} style={styles.image} />
        <Surface mode="flat" style={styles.surface}>
          <IconButton
            icon={location.isFavorite ? 'star' : 'star-outline'}
            onPress={() => toggleFavorite(location.id)}
            size={36}
            mode="contained"
            style={styles.favoriteButton}
          />
        </Surface>
      </View>
      <View style={styles.contentContainer}>
        <Text variant="titleLarge" style={styles.title}>
          {location.name}
        </Text>
        <View style={styles.priceAndRatingContainer}>
          <Chip mode="flat" icon="cash">
            {location.price === 0
              ? 'Gratuito'
              : convertCurrency(location.price)}
          </Chip>
          <Chip mode="flat" icon="star-box">
            {averageRating(location.rating)}
          </Chip>
        </View>
        <View style={styles.openingHoursContainer}>
          <Text variant="labelLarge">Horários</Text>
          {location.openingHours.map((openingHour, index) => (
            <View key={index} style={styles.openingHoursChipContainer}>
              <Chip mode="outlined" icon="clock">
                {openingHour}
              </Chip>
            </View>
          ))}
        </View>
        <View style={styles.addressContainer}>
          <Text variant="labelLarge">Endereço</Text>
          <Text variant="bodyMedium">{location.address}</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text variant="labelLarge">Descrição</Text>
          <Text variant="bodyMedium">{location.description}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {},
  contentContainer: {
    padding: 16,
  },
  title: {
    marginTop: 4,
    marginBottom: 12,
    width: '80%',
  },
  image: {
    height: 240,
    position: 'relative',
  },
  surface: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: 52,
    height: 52,
    borderRadius: 999,
    bottom: 0,
    right: 16,
    marginBottom: -26,
  },
  favoriteButton: {
    zIndex: 10,
  },
  priceAndRatingContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    justifyContent: 'flex-start',
  },
  openingHoursContainer: {
    marginTop: 24,
    gap: 8,
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  addressContainer: {
    marginTop: 16,
    gap: 8,
    justifyContent: 'flex-start',
  },
  openingHoursChipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  descriptionContainer: {
    marginTop: 16,
    gap: 8,
    justifyContent: 'flex-start',
  },
});

export default LocationScreen;
