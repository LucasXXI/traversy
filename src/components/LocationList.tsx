import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { List } from 'react-native-paper';
import LocationItem from './LocationItem';

type LocationListProps = {
  values: Location[];
  onLocationPress: (locationId: number) => void;
  onToggleFavorite: (locationId: number) => void;
};

const LocationList = ({
  values,
  onLocationPress,
  onToggleFavorite,
}: LocationListProps) => {
  return (
    <List.Section>
      <ScrollView>
        {values.map((location) => (
          <LocationItem
            key={location.id}
            location={location}
            onLocationPress={onLocationPress}
            onToggleFavorite={onToggleFavorite}
          />
        ))}
      </ScrollView>
    </List.Section>
  );
};

export default LocationList;
