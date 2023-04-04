import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen/Homescreen";

const Stack = createNativeStackNavigator();
//create a navigation container component
const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Home" 
        component={HomeScreen}
        options={{title: "Titulo da Home"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;

