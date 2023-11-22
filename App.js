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
import HomeScreen from './Screens/Home/Home';
import ProfileScreen from './Screens/welcome/Profile/Profile';
import AgricScreen from './Screens/Agric/Agric';
import AutomobileScreen from './Screens/Auto/Automobile';
import EducationScreen from './Screens/Education/Education';
import MainScreen from './Screens/welcome/Dashboard/component/MainScreen';









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
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
         <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerShown: false,
          }}
        />
         <Stack.Screen
          name="Education"
          component={EducationScreen}
          options={{
            headerShown: false,
          }}
        />
         <Stack.Screen
          name="Automobile"
          component={AutomobileScreen}
          options={{
            headerShown: false,
          }}
        />
         <Stack.Screen
          name="Agric"
          component={AgricScreen}
          options={{
            headerShown: false,
          }}
        />
         <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{
            headerShown: false,
          }}
        />
        
        {/* Define your 'NextScreen' component here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
