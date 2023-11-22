// SettingsScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StatusBar,SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CustomHeader = ({ title, onPress }) => (
  <View
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#fff', // Set the background color you desire
      marginTop: StatusBar.currentHeight,
      paddingVertical: 10,
      paddingHorizontal: 15,
    }}
  >
    <TouchableOpacity onPress={onPress} style={{ paddingRight: 15 }}>
      <Text style={{ fontSize: 18, color: 'black' }}>{'<-- Back'}</Text>
    </TouchableOpacity>
    <Text style={{ fontSize: 18 }}>{title}</Text>
  </View>
);

const SettingsScreen = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <CustomHeader  onPress={goBack} />
      {/* Rest of your content */}
    </SafeAreaView>
  );
};

export default SettingsScreen;
