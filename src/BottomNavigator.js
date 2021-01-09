import React from 'react';
import HomeScreen from './screens/HomeScreen';
import InventoryScreen from './screens/InventoryScreen';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';


const Tab = createMaterialBottomTabNavigator();

const BottomNavigator = () => {
    return (
      <>
         <Tab.Navigator   
              initialRouteName="Home"
              activeColor="#f0edf6"
              inactiveColor="#3e2465"
              barStyle={{ backgroundColor: '#ffa500' }}>
          <Tab.Screen 
              name="Home" 
              component={HomeScreen}
              options={{
              tabBarLabel: 'Home',
              tabBarIcon: () => (
                <Ionicons name="home" size={24} color="black" />
               ), 
             }}
           />       
          <Tab.Screen 
             name="Inventory" 
             component={InventoryScreen}
             options={{
               tabBarLabel: 'Inventory',
               tabBarIcon: () => (
                 <Ionicons name="car-sport-outline" size={24} color="black" />
                ), 
              }}
            />
        </Tab.Navigator>
      </>
     );
    };
 export default BottomNavigator;
        

