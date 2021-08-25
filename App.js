
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from "./screens/Home";
import SpaceCraftScreen from "./screens/SpaceCraftScreen";
import MeteorScreen from "./screens/StarMapScreen";
import DailyPictures from "./screens/DailyPicturesScreen"
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack=createStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="home" screenOptions={{headerShown:false}}>
      <Stack.Screen name="home" component={HomeScreen}/>
      <Stack.Screen name="spaceCraft" component={SpaceCraftScreen}/>
      <Stack.Screen name="meteor" component={DailyPictures}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
