import React, { useState, useMemo } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, StyleSheet, View, Image } from 'react-native';
import { Text, IconButton, Surface, Card, Chip } from 'react-native-paper';

import { FavoriteStackParamList } from '../routes/FavoriteStack';
import { HomeStackParamList } from '../routes/HomeStack';
import { useLocations } from '../stores/locations';

type LocationScreenProps = NativeStackScreenProps<
  HomeStackParamList | FavoriteStackParamList,
  'Location'
>;

//create a component that renders the Locations information from Locations.tsx file
const LocationScreen = ({ route }: LocationScreenProps) => {
  const { locationId } = route.params;
  const { toggleFavorite, locations } = useLocations();

  const location = useMemo(
    () => locations.find((location) => location.id === locationId)!,
    [locations]
  );

  const AvgRating = (rating: Array<number>) => {
    const avg = rating.reduce((a, b) => a + b, 0) / location.rating.length;
    return avg.toFixed(1);
  };

  //render the location information
  return (
    <>
      <View>
        <Image source={{ uri: location.imageUrl }} style={styles.image} />
        <Surface mode="flat" style={styles.surface}>
          <IconButton
            icon={location.isFavorite ? 'star' : 'star-outline'}
            onPress={() => toggleFavorite(location.id)}
            size={36}
            mode="contained"
          />
        </Surface>
      </View>
      <View style={styles.container}>
        <Text variant="titleLarge" style={{ marginBottom: 10 }}>
          {location.name}
        </Text>
        <View style={{ flexDirection: 'row' }}>
          <Chip
            mode="flat"
            style={{ marginBottom: 10, width: '25%', marginRight: 5 }}
            textStyle={{ textAlign: 'center' }}
            icon={'cash'}
            compact={true}
          >
            {location.price == 0
              ? 'Gratuito'
              : `R$${location.price.toFixed(1)}`}
          </Chip>
          <Chip
            mode="outlined"
            style={{ marginBottom: 10, width: '25%', justifyContent: 'center' }}
            textStyle={{ textAlign: 'center' }}
            icon={'star-box'}
            compact={true}
          >
            {AvgRating(location.rating)}
          </Chip>
        </View>
        <Chip
          mode="outlined"
          style={{ marginBottom: 10, width: '100%', justifyContent: 'center'}}
          textStyle={{ textAlign: 'left' }}
          icon={'clock'}
          compact={true}
        >
          {location.openingHours}
        </Chip>
        <Card mode="contained">
          <Card.Content>
            <Text style={{textAlign: 'justify'}}>{location.description}</Text>
          </Card.Content>
        </Card>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    margin: 'auto',
    padding: 16,
  },

  title: {
    textAlign: 'left',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  image: {
    width: '100%',
    height: 200,
    position: 'relative',
  },
  surface: {
    position: 'absolute',
    right: 16,
    bottom: 0,
    width: 52,
    borderRadius: 999,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -26,
  },
});

export default LocationScreen;
