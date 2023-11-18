import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';



const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/P3.jpg')}
        style={styles.backgroundImage}
      />
      <Text style={styles.txt}>
      Book any service 
      at your comfort
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.arrow}>
        <Text style={styles.arrowText}>Next➡️</Text>
      </TouchableOpacity>
    
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  arrow: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 50,
    marginRight:30,
    marginBottom:20
  },
  arrowText: {
    fontSize: 30,
    color: 'white',
  
   
  },
  txt: {
    fontSize: 50,
    color: 'white',
    marginTop:50
  },
});

export default WelcomeScreen;
