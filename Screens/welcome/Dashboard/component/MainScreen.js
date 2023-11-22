// MainScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MaterialIcons } from '@expo/vector-icons'; // Import MaterialIcons from Expo
import DashboardScreen from '../Dashboard';
import EducationScreen from '../../../Education/Education';
import AutomobileScreen from '../../../Auto/Automobile';
import AgricScreen from '../../../Agric/Agric';

const MainScreen = () => {
  const Tab = createMaterialTopTabNavigator();
  const [activeTab, setActiveTab] = useState('Dashboard'); // Set 'Dashboard' as the default active tab

  return (
    <View style={{ flex: 1 }}>
      {/* Top Tabs */}
      <View style={styles.topTabsContainer}>
        <TouchableOpacity
          style={[styles.topTab, activeTab === 'Dashboard' && styles.activeTopTab]}
          onPress={() => setActiveTab('Dashboard')}>
          <MaterialIcons
            name="dashboard"
            size={24}
            color={activeTab === 'Dashboard' ? '#501B73' : '#666'}
          />
          <Text style={[styles.topTabText, activeTab === 'Dashboard' && styles.activeTopTabText]}></Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.topTab, activeTab === 'Agric' && styles.activeTopTab]}
          onPress={() => setActiveTab('Agric')}>
          <MaterialIcons
            name="agriculture"
            size={24}
            color={activeTab === 'Agric' ? '#501B73' : '#666'}
          />
          <Text style={[styles.topTabText, activeTab === 'Agric' && styles.activeTopTabText]}></Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.topTab, activeTab === 'Automobile' && styles.activeTopTab]}
          onPress={() => setActiveTab('Automobile')}>
          <MaterialIcons
            name="directions-car"
            size={24}
            color={activeTab === 'Automobile' ? '#501B73' : '#666'}
          />
          <Text style={[styles.topTabText, activeTab === 'Automobile' && styles.activeTopTabText]}></Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.topTab, activeTab === 'Education' && styles.activeTopTab]}
          onPress={() => setActiveTab('Education')}>
          <MaterialIcons
            name="school"
            size={24}
            color={activeTab === 'Education' ? '#501B73' : '#666'}
          />
          <Text style={[styles.topTabText, activeTab === 'Education' && styles.activeTopTabText]}></Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <Tab.Navigator
        initialRouteName="Dashboard"
        tabBarOptions={{
          labelStyle: { fontSize: 14, fontWeight: 'bold' },
          tabStyle: { width: 120 },
          style: { backgroundColor: '#EDEDED' },
          indicatorStyle: { backgroundColor: '#501B73' },
          scrollEnabled: true, 
        }}>
        <Tab.Screen name="Dashboard" component={DashboardScreen} />
        <Tab.Screen name="Agric" component={AgricScreen} />
        <Tab.Screen name="Automobile" component={AutomobileScreen} />
        <Tab.Screen name="Education" component={EducationScreen} />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  topTabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 10,
    backgroundColor: '#EDEDED',
    paddingHorizontal: 10,
  },
  topTab: {
    marginTop: 40,
    alignItems: 'center',
  },
  topTabText: {
    fontSize: 10,
    color: '#666',
  },
  activeTopTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#501B73',
  },
  activeTopTabText: {
    color: '#501B73',
  },
});

export default MainScreen;
