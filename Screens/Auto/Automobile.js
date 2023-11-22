import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator, Modal, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Import necessary icons

const AutomobileScreen = ({ navigation }) => {
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
    {
      id: 1,
      name: 'Mechanic',
      description: 'Mechanics repair and maintain vehicles, ensuring they run smoothly and safely.',
    },
    {
      id: 2,
      name: 'Plumber',
      description: 'Plumbers install and repair plumbing systems, including pipes, fixtures, and appliances.',
    },
    {
      id: 3,
      name: 'Electrician',
      description: 'Electricians work on electrical systems, wiring, and components in homes and businesses.',
    },
    {
      id: 4,
      name: 'Carpenter',
      description: 'Carpenters build and repair structures and furniture using wood and other materials.',
    },
    {
      id: 5,
      name: 'Welder',
      description: 'Welders join metal pieces together through various welding techniques.',
    },
    {
      id: 6,
      name: 'Mason',
      description: 'Masons work with bricks, concrete, and stone to construct and repair structures.',
    },
    {
      id: 7,
      name: 'HVAC Technician',
      description: 'HVAC technicians install and maintain heating, ventilation, and air conditioning systems.',
    },
    {
      id: 8,
      name: 'Auto Body Repair Technician',
      description: 'Auto body technicians repair and restore the exterior of vehicles.',
    },
    {
      id: 9,
      name: 'Locksmith',
      description: 'Locksmiths install, repair, and replace locks and security systems.',
    },
    {
      id: 10,
      name: 'Landscaper',
      description: 'Landscapers design and maintain outdoor spaces, including gardens, lawns, and hardscapes.',
    },
    {
      id: 11,
      name: 'Roofing Contractor',
      description: 'Roofers install and repair roofs on buildings and homes.',
    },
    {
      id: 12,
      name: 'Tailor/Seamstress',
      description: 'Tailors and seamstresses alter and repair clothing and create custom garments.',
    },
    {
      id: 13,
      name: 'Barber/Hairstylist',
      description: 'Barbers and hairstylists provide haircuts, styling, and grooming services.',
    },
    {
      id: 14,
      name: 'Jeweler',
      description: 'Jewelers create, repair, and modify jewelry pieces.',
    },
    {
      id: 15,
      name: 'Watchmaker',
      description: 'Watchmakers repair and maintain timepieces.',
    },
    {
      id: 16,
      name: 'Shoemaker/Cobbler',
      description: 'Cobblers repair and modify shoes and other footwear.',
    },
    {
      id: 17,
      name: 'Blacksmith',
      description: 'Blacksmiths forge metal items, such as tools, hardware, and decorative pieces.',
    },
    {
      id: 18,
      name: 'Glassblower',
      description: 'Glassblowers shape and create glass art and functional items.',
    },
    {
      id: 19,
      name: 'Tattoo Artist',
      description: 'Tattoo artists create permanent body art designs.',
    },
    {
      id: 20,
      name: 'Dry Cleaner',
      description: 'Dry cleaners clean and press clothing and textiles.',
    },
    // Additional services
    {
      id: 21,
      name: 'Painter',
      description: 'Painters apply paint and coatings to surfaces, such as walls, buildings, and artwork.',
    },
    {
      id: 22,
      name: 'Bricklayer',
      description: 'Bricklayers specialize in the construction and repair of brick structures and walls.',
    },
    {
      id: 23,
      name: 'Carpet Installer',
      description: 'Carpet installers lay and secure carpets in homes and commercial spaces.',
    },
    {
      id: 24,
      name: 'Furniture Upholsterer',
      description: 'Upholsterers restore and repair furniture by replacing fabric and padding.',
    },
    {
      id: 25,
      name: 'Gardener/Landscaper Architect',
      description: 'Landscape architects plan and design outdoor spaces, while gardeners maintain and care for gardens and plants.',
    },
    {
      id: 26,
      name: 'Metal Fabricator',
      description: 'Metal fabricators create and repair metal structures and components.',
    },
    {
      id: 27,
      name: 'Tailor for Custom Suits',
      description: 'Tailors specializing in custom suits create tailored clothing that perfectly fits individual clients.',
    },
    {
      id: 28,
      name: 'Appliance Repair Technician',
      description: 'Appliance repair technicians fix and maintain household appliances like refrigerators, washing machines, and ovens.',
    },
    {
      id: 29,
      name: 'Boat Mechanic',
      description: 'Boat mechanics repair and maintain boats and marine engines.',
    },
    {
      id: 30,
      name: 'Aircraft Mechanic',
      description: 'Aircraft mechanics ensure the safety and functionality of aircraft by performing maintenance and repairs.',
    },
    {
      id: 31,
      name: 'Brake and Muffler Repair Specialist',
      description: 'Brake and muffler specialists work on the brake and exhaust systems of vehicles.',
    },
    {
      id: 32,
      name: 'Bicycle Repair Technician',
      description: 'Bicycle technicians repair and maintain bicycles for recreational and transportation purposes.',
    },
    {
      id: 33,
      name: 'Gunsmith',
      description: 'Gunsmiths repair, modify, and customize firearms.',
    },
    {
      id: 34,
      name: 'Leatherworker',
      description: 'Leatherworkers craft and repair leather goods, such as bags, belts, and wallets.',
    },
    {
      id: 35,
      name: 'Horseshoer (Farrier)',
      description: 'Farriers provide hoof care and shoeing services to horses.',
    },
    {
      id: 36,
      name: 'Pest Control Specialist',
      description: 'Pest control specialists manage and eliminate pest infestations in homes and businesses.',
    },
    {
      id: 37,
      name: 'Tiler',
      description: 'Tilers install and repair ceramic, stone, and other types of tiles in various settings.',
    },
    {
      id: 38,
      name: 'Pool Maintenance Technician',
      description: 'Pool technicians maintain and service swimming pools.',
    },
    {
      id: 39,
      name: 'Chimney Sweep',
      description: 'Chimney sweeps clean and inspect chimneys and flues to ensure safe operation.',
    },
    {
      id: 40,
      name: 'Power Washer',
      description: 'Power washers use high-pressure water to clean and restore surfaces, such as decks, driveways, and buildings.',
    },
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
        <FontAwesome name="user" size={25} color="black" />
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
    marginTop:20,
    marginRight:20
  },
});

export default AutomobileScreen;
