import React, { createContext, useContext, useState } from 'react';

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
  const [locations, setLocations] = useState<Location[]>(
    locationsSource.map((location) => ({ ...location, isFavorite: false }))
  );

  const toggleFavorite = (locationId: number) => {
    setLocations((prevLocations) =>
      prevLocations.map((location) =>
        location.id === locationId
          ? { ...location, isFavorite: !location.isFavorite }
          : location
      )
    );
  };

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
