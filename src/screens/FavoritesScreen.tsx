import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button } from 'react-native-paper';
import { FavoriteStackParamList } from '../routes/FavoriteStack';

type FavoritesScreenProps = NativeStackScreenProps<
  FavoriteStackParamList,
  'Favorite'
>;

const FavoritesScreen = ({ navigation }: FavoritesScreenProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Favorites Screen</Text>
      <Button
        onPress={() =>
          navigation.navigate('Location', {
            location: { id: 1, description: '', image: '', title: '' },
            isFavorite: true,
          })
        }
      >
        Go to Home Screen
      </Button>
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

export default FavoritesScreen;
