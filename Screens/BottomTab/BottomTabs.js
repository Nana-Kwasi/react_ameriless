import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import FavouriteScreen from '../welcome/Favourate/Favourate';
import SettingsScreen from '../welcome/Settings/Settings';
import HistoryScreen from '../welcome/History/History';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          overflow: 'hidden',
          marginLeft: 20,
          marginRight: 20,
        },
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Favourite') {
            iconName = 'heart';
            return <FontAwesome name={iconName} size={size} color={color} />;
          } else if (route.name === 'History') {
            iconName = 'history';
            return <MaterialIcons name={iconName} size={size} color={color} />;
          } else if (route.name === 'Settings') {
            iconName = 'settings';
            return <MaterialIcons name={iconName} size={size} color={color} />;
          }
        },
      })}
    >
      <Tab.Screen name="Favourite" component={FavouriteScreen} />
      <Tab.Screen name="History" component={HistoryScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
