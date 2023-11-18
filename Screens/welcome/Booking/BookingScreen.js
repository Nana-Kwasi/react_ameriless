import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, ScrollView, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { requestForegroundPermissionsAsync, getLastKnownPositionAsync } from 'expo-location';

const BookingScreen = ({ route }) => {
  const [region, setRegion] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [searching, setSearching] = useState(true);
  const [serviceProviders, setServiceProviders] = useState(null);
  const [showSearchButton, setShowSearchButton] = useState(false); // New sta
  const MAX_SEARCH_TIME = 10000; 






  useEffect(() => {
    requestLocationPermission();
  }, []);


useEffect(() => {
  // Add a timeout to stop searching after a certain time
  const searchTimeout = setTimeout(() => {
    setSearching(false); // Stop searching
    setShowSearchButton(true); // Show the "Search Again" button
  }, MAX_SEARCH_TIME);

  return () => {
    // Clear the timeout if the component unmounts or the search completes
    clearTimeout(searchTimeout);
  };
}, [searching]);

// ...


  const requestLocationPermission = async () => {
    const { status } = await requestForegroundPermissionsAsync();

    if (status === 'granted') {
      getCurrentLocation();
    } else {
      setSearching(false);
    }
  };

  const getCurrentLocation = async () => {
    const location = await getLastKnownPositionAsync({});
    if (location) {
      const { latitude, longitude } = location.coords;
      setRegion({
        latitude,
        longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
      setUserLocation({ latitude, longitude });
    } else {
      setSearching(false);
    }
  };

  const fetchServiceProviders = async () => {
    // Replace this with your logic to fetch nearby service providers
    // This is a placeholder, you should fetch real data and set it in the state
    // For example:
    // const providers = await fetchServiceProvidersFromAPI();
    // setServiceProviders(providers);

    setTimeout(() => {
      // Simulate fetching nearby service providers (remove this in your actual code)
      const providers = [
        { id: 1, name: 'Service Provider 1', latitude: 37.79, longitude: -122.43 },
        { id: 2, name: 'Service Provider 2', latitude: 37.795, longitude: -122.435 },
      ];
      setServiceProviders(providers);
      setSearching(false); // Stop searching after setting providers
      setShowSearchButton(true); // Show the "Search Again" button after a delay
    }, 3000); // Simulate a 3-second delay, replace this with actual fetching
  };

  const handleSearchAgain = () => {
    // Trigger the search again
    setShowSearchButton(false); // Hide the "Search Again" button
    setSearching(true); // Start searching again
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Nearby Service Providers</Text>
        <Text style={styles.serviceName}>{route.params.service.name}</Text>
        <Text style={styles.serviceDescription}>{route.params.service.description}</Text>
        <MapView
          style={styles.map}
          initialRegion={region}
        >
          {userLocation && <Marker coordinate={userLocation} />}
          {serviceProviders &&
  serviceProviders.map(provider => (
    <Marker
      key={provider.id}
      coordinate={{ latitude: provider.latitude, longitude: provider.longitude }}
      title={provider.name}
    />
  ))
}

        </MapView>
        {userLocation && (
          <View style={styles.locationTextContainer}>
            {/* Display user location information */}
          </View>
        )}
        {searching && !serviceProviders && (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#0000ff" />
            <Text style={styles.searchingText}>Searching for nearby service providers...</Text>
          </View>
        )}
        {!searching && !serviceProviders && showSearchButton && (
          <View style={styles.noServiceProvidersContainer}>
            <Text style={styles.noServiceProvidersText}>No service providers found.</Text>
            <TouchableOpacity 
             style={styles.searchAgainText1}
             onPress={handleSearchAgain}>
              <Text style={styles.searchAgainText}>Search Again</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 60,
  },
  serviceName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  serviceDescription: {
    fontSize: 16,
    marginBottom: 20,
  },
  map: {
    width: '100%',
    height: 400,
  },
  locationTextContainer: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 5,
    padding: 5,
  },
  locationText: {
    fontSize: 16,
  },
  loadingContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  searchingText: {
    marginTop: 10,
    fontSize: 18,
  },
  noServiceProvidersContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  noServiceProvidersText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  searchAgainText: {
    fontSize: 20,
    color: 'white',
    marginBottom: 5,
    
  },
  searchAgainText1: {
    marginTop: 10,
    borderRadius: 20, // Set the border radius to make it round
    width: "60%", 
    backgroundColor: 'blue', // Add a background color
  },
});

export default BookingScreen;
