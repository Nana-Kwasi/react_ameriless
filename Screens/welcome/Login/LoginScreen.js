import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage] = useState('');

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  const handleLogin = () => {
    if (!email.match(emailRegex)) {
      // Handle invalid email
    } else {
      // Implement your actual login logic here
      // Assuming login is successful, navigate to the DashboardScreen
      navigation.navigate('Dashboard'); // Navigate to Dashboard
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={require('../../../assets/P5.jpg')} style={styles.logo} />
          <Text style={styles.logoText}>Login to your account</Text>
          <Text style={styles.title}>Enter your login credentials</Text>
        </View>
        <Text style={styles.errorMessage}>{errorMessage}</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          placeholderTextColor="black"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
          placeholderTextColor="black"
        />
  
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.forgotPassword}  onPress={() => navigation.navigate('Reset')}>
          <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
        </TouchableOpacity>
        <Text style={styles.Log}>Or sign in with</Text>
        {/* Google and Apple Login Icons */}
        <View style={styles.socialLogin}>
          <TouchableOpacity style={styles.googleLogin}>
            <FontAwesome name="google" size={24} color="#D92929" style={styles.socialIcon} />
            <Text style={styles.gog}> Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.appleLogin}>
            <AntDesign name="apple1" size={24} color="black" style={styles.socialIcon} />
            <Text style={styles.gog1}>Apple ID</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.accountContainer}>
          <Text style={styles.needAccountText}>Need an account?</Text>
          <TouchableOpacity style={styles.loginButton1} onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.buttonText1}>Create account</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.right}>Copyright Bookme247 - All Right Reserved</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: '#000000', // Black background
    alignItems: 'center',
    paddingTop: 50, // Adjust this value for spacing
    borderBottomEndRadius: 40, // Rounded edges
    borderBottomLeftRadius: 40,
    width:'100%' ,
    height:'35%',
    marginBottom:65
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoText: {
    fontSize: 20,
    color: 'white',
    marginTop: 10,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 14,
   
    marginBottom: 20,
    color: 'white',
    marginTop: 10,
  },
  errorMessage: {
    color: '#FBF9D8',
    marginBottom: 10,
    fontSize: 20,
  },
  input: {
    width: 300,
    fontSize: 19,
    height: 45,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 50,
    paddingHorizontal: 20,
    marginBottom: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  loginButton: {
    width: 350,
    height: 50,
    backgroundColor: 'black',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:5,
    marginRight: 40,
    marginLeft:30,
    marginBottom:20
  },
  buttonText: {
    color: 'white',
    fontSize: 19,
    fontWeight: 'bold',
  },
  forgotPassword: {
   
    color: 'black',
    fontSize: 19,
    marginLeft: 200,
  },
  forgotPasswordText: {
    color: 'black',
  },
  loginButton1: {
    width: 250,
    flexDirection: 'row',
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginRight: 40,
  },
  socialLogin: {
    flexDirection: 'row',
    marginTop: 5,
  },
  googleLogin: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 10,
    marginRight: 10,
    borderColor: 'black', // Add a black border
    borderWidth: 1,
    width: 180,
  
  },
  appleLogin: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 10,
    borderColor: 'black', // Add a black border
    borderWidth: 1,
    width: 180,
  },
  socialIcon: {
    width: 24,
    height: 24,
    marginLeft:30
  },
  gog: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
  },
  gog1: {
    color: '#555555',
    fontSize: 15,
    fontWeight: 'bold',
  },
  Log:{
    fontWeight:'bold',
    fontSize:15,
    marginTop:20,
    marginBottom:10
  },
  acc:{
    flexDirection: 'row',
  },
  buttonText1: {
    color: 'black',
    fontSize: 19,
    fontWeight: 'bold',
  },
  accountContainer: {
    flexDirection: 'row', 
    alignItems: 'center',

  },
  needAccountText: {
    color: 'black',
   marginLeft:180,
   marginTop:15,
   marginBottom:30
  },
  buttonText1: {
    color: 'black',
    marginRight:95,
    fontSize:15,
    fontWeight:'bold',
    marginBottom:30
  },
  right:{
    marginBottom:30,
    backgroundColor:'black',
    color:'white',
    width:'80%'
  }
  
});

export default LoginScreen;
