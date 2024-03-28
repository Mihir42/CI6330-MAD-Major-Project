import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect, createContext } from "react";
import * as Location from "expo-location";

const dummyLocation = {
  coords: {
    accuracy: 100,
    altitude: 61.900001525878906,
    altitudeAccuracy: 100,
    heading: 0,
    latitude: 52.2371,
    longitude: 0.8944,
    speed: 0,
  },
  mocked: false,
  timestamp: 1711571170839,
};

const Geo = ({ callback }) => {
  const [location, setLocation] = useState(dummyLocation);
  const [address, setAddress] = useState("Balls");
  const [city, setCity] = useState("Tennis");

  let nuts = "Nut";
  const LocationContext = createContext();

  const resverseGeocode = async () => {
    const reverseGeocodedAddress = await Location.reverseGeocodeAsync({
      longitude: location.coords.longitude,
      latitude: location.coords.latitude,
    });
    let tempAddress = "";
    tempAddress = reverseGeocodedAddress[0].subregion;
    setCity(tempAddress);
    callback(city);
  };

  useEffect(() => {
    const getPermissions = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Please grant location permissions");
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
      resverseGeocode();
    };
    getPermissions();
  }, [city]);

  return <View></View>;
};

export default Geo;

const styles = StyleSheet.create({});
