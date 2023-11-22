import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ActivityIndicator, KeyboardAvoidingView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const EmailConfirmationScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [email, setEmail] = useState('');

  const handleEmailConfirmation = () => {
    setLoading(true);
    // Simulating an email confirmation request
    setTimeout(() => {
      setSuccessMessage('Confirmation message is been sent');
      setLoading(false);
      navigation.navigate('Main');
    }, 5000); // Simulated 2 seconds delay for confirmation

    // Implement your actual email confirmation logic here using the 'email' state
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
       <View style={styles.header}>
      <Image source={require('../../../assets/P5.jpg')} style={styles.logo} />
      <Text style={styles.logoText}>CONFIRM YOUR EMAIL</Text>
      <Text style={styles.title}>Enter your email to confirm your account</Text>
    </View>
      <View style={styles.inputContainer}>
        <FontAwesome name="envelope" size={20} color="black" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
      </View>
      <TouchableOpacity style={styles.confirmButton} onPress={handleEmailConfirmation} disabled={loading || !email}>
        {loading ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text style={styles.buttonText}>Confirm Email</Text>
        )}
      </TouchableOpacity>
      {successMessage !== '' && <Text style={styles.successMessage}>{successMessage}</Text>}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
    color: 'gray',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
  },
  header: {
    backgroundColor: '#000000', // Black background
    alignItems: 'center',
    paddingTop: 50, // Adjust this value for spacing
    borderBottomEndRadius: 40, // Rounded edges
    borderBottomLeftRadius: 40,
    width: '100%',
    height: '35%',
    marginBottom: 65,
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
  confirmButton: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
  successMessage: {
    color: 'green',
    marginTop: 10,
    fontSize: 16,
  },
});

export default EmailConfirmationScreen;
