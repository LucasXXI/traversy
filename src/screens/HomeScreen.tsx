import React, { useMemo, useState } from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, View } from 'react-native';
import { Chip, Portal, Text } from 'react-native-paper';

import { locations } from '../assets/locations';
import FilterDialog from '../components/FilterDialog';
import { HomeStackParamList } from '../routes/HomeStack';

type HomeScreenProps = NativeStackScreenProps<HomeStackParamList, 'Home'>;

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const [activitiesDialogOpen, setActivitiesDialogOpen] = useState(false);
  const [neighborhoodsDialogOpen, setNeighborhoodsDialogOpen] = useState(false);

  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);
  const [selectedNeighborhoods, setSelectedNeighborhoods] = useState<string[]>(
    []
  );

  const activities = useMemo(() => {
    const filteredLocations = selectedNeighborhoods.length
      ? locations.filter((location) =>
          selectedNeighborhoods.includes(location.neighborhood)
        )
      : locations;

    return filteredLocations
      .map((location) => location.activities)
      .flat()
      .sort()
      .filter((activity, index, self) => self.indexOf(activity) === index);
  }, [selectedNeighborhoods]);

  const locationsNeighborhoods = useMemo(() => {
    const filteredLocations = selectedActivities.length
      ? locations.filter((location) =>
          location.activities.some((activity) =>
            selectedActivities.includes(activity)
          )
        )
      : locations;

    return filteredLocations
      .map((location) => location.neighborhood)
      .sort()
      .filter(
        (neighborhood, index, self) => self.indexOf(neighborhood) === index
      );
  }, [selectedActivities]);

  const filteredLocations = useMemo(
    () =>
      locations.filter((location) => {
        const hasSelectedActivities = selectedActivities.length
          ? location.activities.some((activity) =>
              selectedActivities.includes(activity)
            )
          : true;

        const hasSelectedNeighborhoods = selectedNeighborhoods.length
          ? selectedNeighborhoods.includes(location.neighborhood)
          : true;

        return hasSelectedActivities && hasSelectedNeighborhoods;
      }),
    [selectedActivities, selectedNeighborhoods]
  );

  const applyActivitiesFilter = (values: string[]) => {
    setSelectedActivities(values);
    setActivitiesDialogOpen(false);
  };

  const applyNeighborhoodsFilter = (values: string[]) => {
    setSelectedNeighborhoods(values);
    setNeighborhoodsDialogOpen(false);
  };

  console.log(
    'filteredLocations',
    filteredLocations.map((location) => location.name)
  );

  return (
    <View style={styles.container}>
      <View style={styles.filters}>
        <Text variant="labelLarge">Filtros</Text>
        <View style={styles.chips}>
          <Chip
            mode="outlined"
            selected={selectedActivities.length > 0}
            onPress={() => setActivitiesDialogOpen(true)}
          >
            Atividades
          </Chip>
          <Chip
            mode="outlined"
            selected={selectedNeighborhoods.length > 0}
            onPress={() => setNeighborhoodsDialogOpen(true)}
          >
            Bairro
          </Chip>
        </View>
        <Portal>
          <FilterDialog
            title="Atividades"
            values={activities}
            visible={activitiesDialogOpen}
            onDismiss={() => setActivitiesDialogOpen(false)}
            onApply={applyActivitiesFilter}
          />
          <FilterDialog
            title="Bairro"
            values={locationsNeighborhoods}
            visible={neighborhoodsDialogOpen}
            onDismiss={() => setNeighborhoodsDialogOpen(false)}
            onApply={applyNeighborhoodsFilter}
          />
        </Portal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 18,
  },
  filters: {
    flexDirection: 'column',
    gap: 8,
  },
  chips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    gap: 8,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
