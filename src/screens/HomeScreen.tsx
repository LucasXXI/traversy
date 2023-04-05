import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View, Text, StyleSheet, Button } from 'react-native';

import { HomeStackParamList } from '../routes/HomeStack';

type HomeScreenProps = NativeStackScreenProps<HomeStackParamList, 'Home'>;

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Button
        title="Select Location"
        onPress={() =>
          navigation.navigate('Location', {
            location: {
              id: 1,
              title: 'Location 1',
              description: 'Description 1',
              image: 'https://picsum.photos/200/300',
              price: 100,
            },
            isFavorite: false,
          })
        }
      />
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

export default HomeScreen;
