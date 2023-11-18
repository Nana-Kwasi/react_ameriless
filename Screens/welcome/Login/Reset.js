import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ActivityIndicator, KeyboardAvoidingView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const ResetPasswordScreen = ({ navigation }) => {
 
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleResetPassword = () => {
    if (newPassword !== confirmPassword) {
      // Handle password mismatch
      return;
    }

    // Simulating a password reset request
    setLoading(true);
    setTimeout(() => {
      // Simulated success message
      setSuccessMessage('Password has been reset successfully');
      setLoading(false);
      // Navigate to the login screen after resetting password
      navigation.navigate('Login');
    }, 2000); // Simulated 2 seconds delay for reset

    // Implement your actual password reset logic here
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
    <View style={styles.header}>
      <Image source={require('../../../assets/P5.jpg')} style={styles.logo} />
      <Text style={styles.logoText}>RESET YOUR PASSWORD</Text>
      <Text style={styles.title}>Enter your new password to access your account</Text>
    </View>
    <View style={styles.inputContainer}>
      <View style={styles.inputIcon}>
        <FontAwesome name="lock" size={20} color="black" />
      </View>
      <TextInput
        style={styles.input}
        placeholder="New Password"
        onChangeText={(text) => setNewPassword(text)}
        value={newPassword}
        secureTextEntry
      />
    </View>
    <View style={styles.inputContainer}>
      <View style={styles.inputIcon}>
        <FontAwesome name="lock" size={20} color="black" />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        onChangeText={(text) => setConfirmPassword(text)}
        value={confirmPassword}
        secureTextEntry
      />
    </View>
    <TouchableOpacity style={styles.resetButton} onPress={handleResetPassword} disabled={loading}>
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text style={styles.buttonText}>Reset Password</Text>
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
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  inputIcon: {
    margin: 10,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  resetButton: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 15,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
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
  successMessage: {
    color: 'green',
    marginTop: 10,
    fontSize: 16,
  },
});

export default ResetPasswordScreen;

