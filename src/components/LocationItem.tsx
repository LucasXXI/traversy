/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { Avatar, IconButton, List } from 'react-native-paper';

type LocationItemProps = {
  location: Location;
  onToggleFavorite: (locationId: number) => void;
  onLocationPress: (locationId: number) => void;
};

const LocationItem = ({
  location,
  onToggleFavorite,
  onLocationPress,
}: LocationItemProps) => {
  location.imageUrl =
    'https://upload.wikimedia.org/wikipedia/commons/4/47/Ver-oPeso-Belem.jpg';

  return (
    <List.Item
      onPress={() => onLocationPress(location.id)}
      title={location.name}
      description={location.description}
      left={(props) => (
        <Avatar.Image
          {...props}
          size={56}
          source={{ uri: location.imageUrl }}
        />
      )}
      right={(props) => (
        <IconButton
          {...props}
          icon={location.isFavorite ? 'star' : 'star-outline'}
          onPress={() => onToggleFavorite(location.id)}
        />
      )}
    />
  );
};

export default LocationItem;
