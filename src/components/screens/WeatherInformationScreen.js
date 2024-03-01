import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View, Button } from "react-native";
import Screen from "../layout/Screen";
import RenderCount from "../UI/RenderCount";
import { Share } from "react-native";
import API from "../API/API";

const dummyWeather = {
  current: {
    cloud: 75,
    condition: [Object],
    feelslike_c: 6.2,
    feelslike_f: 43.2,
    gust_kph: 15.4,
    gust_mph: 9.6,
    humidity: 71,
    is_day: 0,
    last_updated: "2024-02-27 18:45",
    last_updated_epoch: 1709059500,
    precip_in: 0,
    precip_mm: 0.02,
    pressure_in: 30.09,
    pressure_mb: 1019,
    temp_c: 8,
    temp_f: 46.4,
    uv: 1,
    vis_km: 10,
    vis_miles: 6,
    wind_degree: 230,
    wind_dir: "SW",
    wind_kph: 9,
    wind_mph: 5.6,
  },
  location: {
    country: "United Kingdom",
    lat: 51.52,
    localtime: "2024-02-27 18:56",
    localtime_epoch: 1709060178,
    lon: -0.11,
    name: "Dummy London",
    region: "City of London, Greater London",
    tz_id: "Europe/London",
  },
};

const WeatherInformationScreen = () => {
  // Intialisation ------------------------------------
  const weatherEndpoint =
    "http://api.weatherapi.com/v1/current.json?key=8c36386ccc784250871133222242102&q=London&aqi=no";

  // State --------------------------------------------
  const [weather, setWeather] = useState(dummyWeather);
  const [isLoading, setIsLoading] = useState(true);

  const loadWeather = async (weatherEndpoint) => {
    const response = await API.get(weatherEndpoint);
    setIsLoading(false);
    if (response.isSuccess) setWeather(response.result);
  };

  useEffect(() => {
    loadWeather(weatherEndpoint);
  }, []);

  // Handlers -----------------------------------------

  const handleWeather = async () => {
    const shareOptions = {
      message: ` ${weather.location.name} ${weather.current.condition.text} ${
        weather.current.temp_c
      }°C ${weather.location.localtime.slice(10, 16)}  `,
      url: `${weather.current.condition.icon}`,
    };
    try {
      const shareResponse = await Share.share(shareOptions);
    } catch (error) {
      console.log("Error -> ", error);
    }
  };

  return (
    <Screen>
      <Image
        style={styles.imageIcon}
        source={{ uri: `https:${weather.current.condition.icon}` }}
      />
      <Text style={styles.textHeader}>{weather.location.name}</Text>
      <Text style={styles.textHeader}>
        {weather.current.condition.text} {weather.current.temp_c}°C
      </Text>
      <Text style={styles.textNormal}>
        Wind(kph): {weather.current.wind_kph}, Humidity:{" "}
        {weather.current.humidity}% UV: {weather.current.uv}
      </Text>
      <Button onPress={handleWeather} title="Share"></Button>
    </Screen>
  );
};

export default WeatherInformationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  viewCenter: { padding: 30, marginBottom: 200, alignContent: "center" },
  viewBottom: {},
  textHeader: {
    fontWeight: "bold",
    fontSize: 30,
  },
  textNormal: { fontSize: 20, textAlign: "center" },
  imageIcon: {
    width: 120,
    height: 120,
  },
});
