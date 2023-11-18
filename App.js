import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './Screens/welcome/WelcomeScreen';
import LoginScreen from './Screens/welcome/Login/LoginScreen';
import SignUpScreen from './Screens/welcome/Login/SignUp';
import DashboardScreen from './Screens/welcome/Dashboard/Dashboard';
import BookingScreen from './Screens/welcome/Booking/BookingScreen';
import ResetPasswordScreen from './Screens/welcome/Login/Reset';
import EmailConfirmationScreen from './Screens/welcome/Email/Email';
import FavouriteScreen from './Screens/welcome/Favourate/Favourate';
import HistoryScreen from './Screens/welcome/History/History';
import SettingsScreen from './Screens/welcome/Settings/Settings';
import BottomTabNavigator from './Screens/BottomTab/BottomTabs';
import HomeScreen from './Screens/Home/Home';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{
            headerShown: false,
          }}
        />
           <Stack.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{
            headerShown: false,
          }}
        />
         <Stack.Screen
          name="Booking"
          component={BookingScreen}
          options={{
            headerShown: false,
          }}
        />
         <Stack.Screen
          name="Reset"
          component={ResetPasswordScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Email"
          component={EmailConfirmationScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Favourate"
          component={FavouriteScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="History"
          component={HistoryScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="BottomTab"
          component={BottomTabNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        
        {/* Define your 'NextScreen' component here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
