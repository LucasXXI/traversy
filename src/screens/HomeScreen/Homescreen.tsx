import React from 'react';
import { NavigationProp } from "@react-navigation/native";
import { View, Text, StyleSheet, Button } from "react-native";

type HomeScreenProps = {
  navigation: NavigationProp<any, any>;
};

const HomeScreen = ({navigation}: HomeScreenProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Button
        title="Go to User Screen"
        onPress={() => navigation.navigate("User", {name: 'Fábio'})}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },  
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default HomeScreen;