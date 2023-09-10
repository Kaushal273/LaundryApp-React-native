import React from 'react';
import { StyleSheet, Text, View, ScrollView, Pressable, Image } from 'react-native';

const Services = () => {
  const services = [
    {
      id: "0",
      image: "https://cdn-icons-png.flaticon.com/128/3003/3003984.png",
      name: "Washing",
    },
    {
      id: "11",
      image: "https://cdn-icons-png.flaticon.com/128/2975/2975175.png",
      name: "Laundry",
    },
    {
      id: "12",
      image: "https://cdn-icons-png.flaticon.com/128/9753/9753675.png",
      name: "Wash & Iron",
    },
    {
      id: "13",
      image: "https://cdn-icons-png.flaticon.com/128/995/995016.png",
      name: "Cleaning",
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Services Available</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {services.map((service, index) => (
          <Pressable style={styles.serviceItem} key={service.id}>
            <Image source={{ uri: service.image }} style={styles.serviceImage} />
            <Text style={styles.serviceName}>{service.name}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  heading: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 7,
  },
  serviceItem: {
    margin: 10,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 7,
  },
  serviceImage: {
    width: 70,
    height: 70,
  },
  serviceName: {
    textAlign: "center",
    marginTop: 10,
  },
});

export default Services;
