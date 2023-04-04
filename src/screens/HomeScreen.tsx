import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View, Text, StyleSheet, Button } from 'react-native';

import { RootStackParamList } from '../routes/Stack';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Button
        title="Select Location"
        onPress={() => navigation.navigate('Location')}
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
