import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator, Modal, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Import necessary icons

const DashboardScreen = ({ navigation }) => {
    const [bookingStates, setBookingStates] = useState({});
    const [bookingMessages, setBookingMessages] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [searchText, setSearchText] = useState('');



    
    const handleBookService = (service) => {
      setBookingStates({ ...bookingStates, [service.id]: true });
      setBookingMessages({ ...bookingMessages, [service.id]: '' });
    
      setTimeout(() => {
        setBookingMessages({ ...bookingMessages, [service.id]: 'Request has been sent' });
    
        setTimeout(() => {
          setBookingStates({ ...bookingStates, [service.id]: false });
          setBookingMessages({ ...bookingMessages, [service.id]: '' });
          setShowModal(true);
          navigation.navigate('Booking', { service }); // Show the modal
    
          setTimeout(() => {
            setShowModal(false); // Hide the modal after a certain time
          }, 3000); // Adjust the duration as needed (3000 milliseconds = 3 seconds)
        }, 1500); // Simulating a 1.5-second delay before showing the modal
      }, 1500); // Simulating a 1.5-second delay, replace with your actual async operation
    };
    const navigateToSettings = () => {
      navigation.navigate('Settings'); // Replace 'Settings' with the actual name of your SettingsScreen
    };
    
    
  const services = [
  
  ];

 


  const renderServiceItem = (service) => {
    const isServiceBooking = bookingStates[service.id];
    const bookingMessage = bookingMessages[service.id];

   
    const isMatch = service.name.toLowerCase().includes(searchText.toLowerCase());

    if (!isMatch) {
      return null;
    }

    return (
      <View key={service.id} style={styles.serviceItem}>
        <Text style={styles.serviceName}>{service.name}</Text>
        <Text style={styles.serviceDescription}>{service.description}</Text>
        <TouchableOpacity
          style={styles.bookButton}
          onPress={() => handleBookService(service)}
          disabled={isServiceBooking}
        >
          {isServiceBooking ? (
            <ActivityIndicator size="small" color="white" />
          ) : (
            <Text style={styles.bookButtonText}>Book Me</Text>
          )}
        </TouchableOpacity>
        {bookingMessage ? (
          <Text style={styles.bookingMessage}>{bookingMessage}</Text>
        ) : null}
      </View>
    );
  };

  return (
   
    <View style={styles.container}>
    <View style={styles.searchBar}>
    <TouchableOpacity style={styles.settingsIcon} onPress={navigateToSettings}>
        <FontAwesome name="cog" size={25} color="black" />
      </TouchableOpacity>
      <TextInput
        style={styles.searchInput}
        placeholder="Search for a service..."
        placeholderTextColor={'black'}
        onChangeText={(text) => setSearchText(text)}
        value={searchText}
      />
     
      <TouchableOpacity style={styles.profileIcon} onPress={() => navigation.navigate('Profile')}>
        <FontAwesome name="user" size={25} color="white" />
      </TouchableOpacity>
    </View>
        <ScrollView>
          <View style={styles.serviceList}>
            {services.map((service) => renderServiceItem(service))}
          </View>





        </ScrollView>
  
        <Modal
          transparent={true}
          animationType="slide"
          visible={showModal}
        >
          <View style={styles.modal}>
            <Text style={styles.modalMessage}>Booking Request Sent</Text>
            {/* Additional modal content */}
          </View>
        </Modal>
       

      </View>
    );
  };
 const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 80,
  },
  serviceList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: 10,
  },
  
  serviceItem: {
    width: '45%',
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#BCBCBC',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#2C6E49',
  },
  serviceName: {
    fontSize: 18,
    fontWeight: 'bold',
    fontSize: 25,
  },
  serviceDescription: {
    fontSize: 17,
    color:"black"
  },
  
  bookButton: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 50,
    marginTop: 10,
    width: "60%",
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  modalMessage: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  modalMessageContent: {
    fontSize: 18,
    color: 'white',
    marginTop: 20,
  },
  bookButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    width:"90%"
  },
  settingsIcon: {
    padding: 5,
    marginTop: 20,
    marginRight:20
   
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 20,
    padding: 10,
    marginRight: 10,
    marginTop:20
  },
  profileIcon: {
    padding: 5,
    marginTop: 20,
    marginRight: 20,
    borderRadius: 50, // Make it a circle
    backgroundColor: 'black', // Background color of the circle
    width: 50, // Adjust the size of the circle as needed
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DashboardScreen;
