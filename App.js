
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Search from "./components/Search";
import About from "./components/About";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Tab = createBottomTabNavigator();






function Menu() {
    return (
        <Tab.Navigator
            screenOptions={{
                showLabel: false,
                indicatorStyle: {
                    height: 10,
                    backgroundColor: '#FFF'
                },
                tabBarStyle: {
                    backgroundColor: '#c4461c',
                    borderTopColor: 'transparent'
                }
            }}>
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen name="About" component={About} />
        </Tab.Navigator>
    );
}


export default function App() {
  return (
      <NavigationContainer>
        <Menu />
      </NavigationContainer>
  );
}

