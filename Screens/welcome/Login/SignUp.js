 import React, { useState } from 'react';
 import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  ActivityIndicator
} from 'react-native';import { AntDesign, FontAwesome } from '@expo/vector-icons';
import RNPickerSelect from 'react-native-picker-select';

const SignUpScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [accountCreated, setAccountCreated] = useState(false);
  const [gender, setGender] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false); // State to manage loading state



  const validatePasswords = () => {
    if (password === repeatPassword) {
      setPasswordsMatch(true);
    } else {
      setPasswordsMatch(false);
    }
  };

  const handleSignup = () => {
    validatePasswords();
    setLoading(true); // Set loading to true when the button is pressed

    setTimeout(() => {
      setLoading(false); // Set loading back to false after checking
      if (!fullName || !email || !password || !repeatPassword) {
        Alert.alert('Error', 'Please fill in all required fields.');
      } else if (!acceptTerms) {
        Alert.alert('Error', 'Please accept the terms and conditions to sign up.');
      } else if (passwordsMatch) {
        setAccountCreated(true);
        console.log('Signing up with Full Name:', fullName, 'Email:', email, 'and Password:', password);
        setTimeout(() => {
          navigation.navigate('Email');
        }, 2000);
      } else {
        Alert.alert('Error', 'Password and Repeat Password do not match.');
      }
    }, 2000);
  };

  const CustomCheckBox = ({ value, onChange }) => {
    return (
      <TouchableOpacity
        style={styles.checkBoxContainer}
        onPress={() => onChange(!value)}
      >
        <View style={[styles.checkBox, value && styles.checkBoxChecked]}>
          {value && <Text style={styles.checkIcon}>✓</Text>}
        </View>
        <Text style={{color:'black', fontSize:16, marginTop:20, marginBottom:10}}>I accept the terms and conditions</Text>
      </TouchableOpacity>
    );
  };
  return (
    <KeyboardAvoidingView
    style={{ flex: 1 }}
    behavior="padding"
    keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -200}
  >
    <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.header}>
      <Image source={require('../../../assets/P5.jpg')} style={styles.logo} />
      <Text style={styles.logoText}>Sign Up for an Account</Text>
      <Text style={styles.title}>Provide your details to start using our service</Text>
    </View>
    <View style={styles.inputContainer}>
      <View style={styles.inputIcon}>
        <FontAwesome name="user" size={24} color="black" />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        placeholderTextColor="black"
        onChangeText={(text) => setFullName(text)}
      />
    </View>
    {/* <View style={styles.inputContainer}>
      <View style={styles.inputIcon}>
        <FontAwesome name="user" size={24} color="black" />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        placeholderTextColor="black"
        onChangeText={(text) => setFullName(text)}
      />
    </View> */}
    <RNPickerSelect
          onValueChange={value => setGender(value)}
          items={[
            { label: 'Male', value: 'male' },
            { label: 'Female', value: 'female' },
            { label: 'Other', value: 'other' },
          ]}
         
          placeholder={{ label: 'Select Gender', value: '' }}
        
          style={pickerSelectStyles}
        />
        <View style={styles.inputContainer}>
  <View style={styles.inputIcon}>
    <FontAwesome name="calendar" size={24} color="black" />
  </View>
  <TextInput
          style={styles.input}
          placeholder="Date of Birth"
          placeholderTextColor="black"
          keyboardType="numeric" // Set the keyboard type to numeric for the date of birth
          onChangeText={(text) => setDateOfBirth(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.inputIcon}>
          <FontAwesome name="envelope" size={24} color="black" />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="black"
          keyboardType="email-address" // Set the keyboard type to email address for the email input
          onChangeText={(text) => setEmail(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.inputIcon}>
          <FontAwesome name="phone" size={24} color="black" />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Phone number"
          placeholderTextColor="black"
          keyboardType="phone-pad" // Set the keyboard type to phone pad for the phone number input
          onChangeText={(text) => setPhoneNumber(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.inputIcon}>
          <FontAwesome name="lock" size={24} color="black" />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          placeholderTextColor="black"
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.inputIcon}>
          <FontAwesome name="lock" size={24} color="black" />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Repeat Password"
          secureTextEntry
          placeholderTextColor="black"
          onChangeText={(text) => setRepeatPassword(text)}
        />
      </View>
    {passwordsMatch ? null : (
      <Text style={styles.errorText}>Passwords do not match</Text>
    )}
    {accountCreated && (
      <Text style={styles.successText}>Account has been created!</Text>
    )}
     
    <CustomCheckBox
              value={acceptTerms}
              onChange={setAcceptTerms}
            />
   <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
          {loading ? ( // Show loading spinner while checking
            <ActivityIndicator color="white" />
          ) : (
            <Text style={styles.buttonText}>Sign Up</Text>
          )}
        </TouchableOpacity>
  
  </ScrollView>
  </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 14,
    color: 'white',
  },
  header: {
    backgroundColor: '#000000',
    alignItems: 'center',
    paddingTop: 80,
    borderBottomEndRadius: 40,
    borderBottomLeftRadius: 40,
    width: '100%',
    height: 250,
  },
  logoText: {
    fontSize: 20,
    color: 'white',
    marginTop: 10,
    fontWeight: 'bold',
  },
  input: {
    width: 350,
    height: 60,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 50,
    paddingHorizontal: 10,  // This controls the text input content padding
    color: 'black',
    marginTop: 20,
    paddingLeft: 50, // Adjust this value to shift the placeholder text to the right
  },
  
  signupButton: {
    width: 200,
    height: 50,
    backgroundColor: 'black',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  termsText: {
    marginTop: 10,
    fontSize: 12,
    color: 'black',
    marginTop: 40,
  },
  termsLink: {
    color: '#ADD8E6',
  },
  errorText: {
    color: '#FBF9D8',
    fontSize: 14,
    marginBottom: 10,
  },
  inputIcon: {
    position: 'absolute',
    top: 40, // Adjust this value to align the icon and placeholder text vertically
    left: 15, // Adjust this value to control the left margin of the icon
  },
  
  
  successText: {
    color: 'black',
    fontSize: 20,
    marginBottom: 10,
  },
  logo: {
    width: 100,
    height: 100,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    borderWidth: 3,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '80%',
    marginHorizontal: 40,
    borderRadius: 50,
    fontSize:20,
    marginTop:20
  },
  inputAndroid: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '80%',
  },
  checkBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },

  checkBox: {
    width: 20,
    height: 20,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#333',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    color:'red',
    marginTop:20,
  
  },
  checkBoxChecked: {
    backgroundColor: 'black',
    marginTop:20,
  },
  checkIcon: {
    color: 'red',
    fontSize: 16,
  },
  checkBoxText: {
    fontSize: 18,
    color: 'black',
    marginTop:30,
   
  },
});

export default SignUpScreen;
