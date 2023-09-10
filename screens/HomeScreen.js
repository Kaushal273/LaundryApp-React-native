import { StyleSheet, Text, View,Alert,StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Location from 'expo-location';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';

const HomeScreen = () => {

    const[displayCurrentAddress, setDisplayCurrentAddress] = useState("we are loading your location");
    const[locationServicesEnabled, setLocationServicesEnabled] = useState(false);

    useEffect(() => {
        checkIfLocationEnabled();
        getCurrentLocation();
    },[]);

    const checkIfLocationEnabled = async () => {
        let enabled = await Location.hasServicesEnabledAsync();
        if(!enabled){
            Alert.alert('Location services not enabled',
             'Please enable the location services', [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ]);
        }else{
            setLocationServicesEnabled(enabled);
        }
    };

    const getCurrentLocation = async () => {
        let {status} = await Location.requestForegroundPermissionsAsync();

        if( status !== "granted"){
            Alert.alert('Permission denied',
             'Allow the app to use the location services', [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ]);
        }

        const {coords} = await Location.getCurrentPositionAsync();
        // console.log(coords);

        if(coords){
            const {latitude,longitude} = coords;

            let response = await Location.reverseGeocodeAsync({
                latitude,
                longitude
            });
            // console.log(response);

            for(let item of response){
                let address = `${item.name} ${item.city} ${item.postalCode}`
                setDisplayCurrentAddress(address)
            }
        }
    }

  return (
    <SafeAreaView>
        <MaterialIcons name="location-on" size={30} color="#fd5c63" />
        <Text>{displayCurrentAddress}</Text>
      
    </SafeAreaView>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
    
});