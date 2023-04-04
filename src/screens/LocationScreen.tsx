import React, { useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View, Text, StyleSheet, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { RootStackParamList } from '../routes/Stack';

type LocationScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Location'
>;

const LocationScreen = ({ navigation, route }: LocationScreenProps) => {
  const params = route.params;
  const [isFavorite, setIsFavorite] = useState(params.isFavorite);

  const OnSetIsFavorite = async () => {
    await AsyncStorage.setItem(
      `@favorites:${params.location.id}`,
      JSON.stringify(params.location)
    );
    setIsFavorite(true);
    console.log('Salvou no async storage');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Location Screen</Text>
      <Button title="Set Favorite" onPress={OnSetIsFavorite} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default LocationScreen;
