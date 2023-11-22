import React from 'react';
import { View, Text,StyleSheet } from 'react-native';





const HomeScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Home Screen</Text>
      <Text style={{ marginTop: 20 }}>Welcome to the Home screen!</Text>
      
    </View>
  );
};
const styles = StyleSheet.create({
  
    bottomTabContainer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'white', // Example background color for better visibility
    },
    
  });
export default HomeScreen;
