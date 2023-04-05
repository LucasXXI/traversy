import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { locations } from '../assets/locations';
import { HomeStackParamList } from '../routes/HomeStack';

type HomeScreenProps = NativeStackScreenProps<HomeStackParamList, 'Home'>;

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const AverageRating = (rating: number[]) => {
    const avg = rating.reduce((acc, cur) => acc + cur) / 5;
    return avg.toFixed(1);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={locations}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Location', {
                location: item,
                isFavorite: false,
              })
            }
            style={styles.LocationCard}
          >
            <Text style={styles.LocationTitle}>{item.name}</Text>
            <Text style={styles.LocationNeighborhood}>{item.neighborhood}</Text>
            <View style={styles.LocationRatingContainer}>
              <MaterialCommunityIcons
                name="star-box"
                size={20}
                color="#f2c94c"
                style={styles.LocationReviewIcon}
              />
              <Text style={styles.LocationRating}>
                {AverageRating(item.rating)}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

//add styles for item.Name, item.neighborhood, item.rating

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  LocationCard: {
    margin: 10,
    width: '90%',
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    padding: 16,
  },
  LocationTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  LocationNeighborhood: {
    fontSize: 16,
    fontWeight: 'normal',
  },
  LocationRatingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  LocationRating: {
    fontSize: 14,
    fontWeight: 'normal',
    textDecorationStyle: 'dashed',
  },
  LocationReviewIcon: {
    marginRight: 5,
  },
});

export default HomeScreen;
