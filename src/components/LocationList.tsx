import React from 'react';
import { List } from 'react-native-paper';
import LocationItem from './LocationItem';
import { ScrollView } from 'react-native-gesture-handler';

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
