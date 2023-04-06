import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { locationsSource } from '../assets/locations';

type Locations = {
  locations: Location[];
  toggleFavorite: (locationId: number) => void;
};

const LocationsContext = createContext<Locations>({
  locations: [],
  toggleFavorite: () => {},
});

export const LocationsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [locations, setLocations] = useState<Location[]>(
    locationsSource.map((location) => ({
      ...location,
      isFavorite: false,
    }))
  );

  const toggleFavorite = async (locationId: number) => {
    const newFavorites = favorites.includes(locationId)
      ? favorites.filter((id) => id !== locationId)
      : [...favorites, locationId];

    setFavorites(newFavorites);

    try {
      await AsyncStorage.setItem('@favorites', JSON.stringify(newFavorites));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const getFavorites = async () => {
      try {
        const valueJSON = await AsyncStorage.getItem('@favorites');
        const value = JSON.parse(valueJSON ?? '[]') as number[];

        setFavorites(value);
      } catch (e) {
        console.log(e);
      }
    };

    getFavorites();
  }, []);

  useEffect(() => {
    setLocations((prev) =>
      prev.map((location) => ({
        ...location,
        isFavorite: favorites.includes(location.id),
      }))
    );
  }, [favorites]);

  return (
    <LocationsContext.Provider
      value={{
        locations,
        toggleFavorite,
      }}
    >
      {children}
    </LocationsContext.Provider>
  );
};

export const useLocations = () => useContext(LocationsContext);
