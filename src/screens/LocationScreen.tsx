import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View, Text, StyleSheet, Button } from 'react-native';

import { RootStackParamList } from '../routes/Stack';

type LocationScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Location'
>;

const LocationScreen = ({ navigation }: LocationScreenProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Location Screen</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
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
