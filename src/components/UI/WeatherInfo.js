import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

import React from "react";

const WeatherInfo = (props) => {
  // Intialisation ------------------------------------
  // State --------------------------------------------
  // Handlers -----------------------------------------
  // View ------------------------------------------------

  return (
    <View style={styles.containerBottom}>
      <Text style={styles.textNormal}>
        <Feather name="droplet" size={40} color="white" /> {"\n"}
        Humidity: {props.currentWeather.current.humidity}%
      </Text>
      <Text style={styles.textNormal}>
        <Feather name="wind" size={40} color="white" /> {"\n"}
        Wind: {"\n"}
        {props.currentWeather.current.wind_kph}KPH
      </Text>
      <Text style={styles.textNormal}>
        <Feather name="sun" size={40} color="white" /> {"\n"}
        UV Index: {"\n"}
        {props.currentWeather.current.uv}
      </Text>
    </View>
  );
};

export default WeatherInfo;

const styles = StyleSheet.create({
  containerBottom: {
    flex: 1,
    marginBottom: 100,
    marginTop: 50,
    justifyContent: "space-between",
    flexDirection: "row",
  },

  textNormal: {
    flex: 1,
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
  },
});
