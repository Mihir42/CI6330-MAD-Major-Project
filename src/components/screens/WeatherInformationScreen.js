import { useEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  View,
  ScrollView,
  TextInput,
} from "react-native";
import Screen from "../layout/Screen";
import WeatherInfo from "../UI/WeatherInfo";
import ShareWeather from "../entity/share/ShareWeather";
import { Picker } from "@react-native-picker/picker";
import API from "../API/API";
import { weatherImages } from "../UI/weatherImages";

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
  const avalibleLocations = [
    {value: 1, label: "London"}, {value: 2, label: "Birmingham"}
  ];

  // State --------------------------------------------
  const [weather, setWeather] = useState(dummyWeather);
  const [isLoading, setIsLoading] = useState(true);
  const [location, setLocation] = useState("London");
  const weatherEndpoint = `http://api.weatherapi.com/v1/current.json?key=8c36386ccc784250871133222242102&q=${location}`;

  // Handlers -----------------------------------------

  const loadWeather = async (weatherEndpoint) => {
    const response = await API.get(weatherEndpoint);
    setIsLoading(false);
    if (response.isSuccess) setWeather(response.result);
  };

  const handleLoaction = (value) => {
    setLocation(value);
  };

  useEffect(() => {
    loadWeather(weatherEndpoint);
  }, [location]);

  // View ------------------------------------------------
  return (
    <Screen>
      <ShareWeather currentWeather={weather} />
      <KeyboardAvoidingView style={styles.formContainer}>
          <Picker
            mode={"dropdown"}
            selectedValue={location}
            onValueChange={handleLoaction}
            style={styles.itemPickerStyle}
          >
            <Picker.Item
              value={null}
              label={"Select location"}
              style={styles.itemPickerPromptStyle}
            />
            {avalibleLocations.map((option, index) => (
              <Picker.Item
                key={index}
                value={option.label}
                label={option.label}
              />
            ))}
          </Picker>
      </KeyboardAvoidingView>
      <Image
        style={styles.imageIcon}
        source={weatherImages[weather.current.condition.text]}
      />
      <Text style={styles.textHeaderTemp}>{weather.current.temp_c}°C</Text>
      <Text style={styles.textHeader}>
        {weather.location.name}, {"\n"}
        {weather.current.condition.text}
      </Text>
      <WeatherInfo currentWeather={weather} />
    </Screen>
  );
};

export default WeatherInformationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  containerBottom: {
    flex: 1,
    marginBottom: 100,
    marginTop: 50,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  textHeader: {
    fontWeight: "bold",
    fontSize: 30,
    color: "white",
    textAlign: "center",
  },
  textHeaderTemp: {
    fontWeight: "bold",
    fontSize: 44,
    color: "white",
    textAlign: "center",
  },
  textNormal: {
    flex: 1,
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
  },
  imageIcon: {
    marginTop: 50,
    width: 100,
    height: 100,
  },
  formContainer: {
    gap: 10,
  },
  formItems: {
    gap: 5,
  },
  itemTextInput: {
    height: 50,
    width: 390,
    paddingLeft: 10,
    fontSize: 16,
    backgroundColor: "white",
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "lightgray",
  },
  itemPickerStyle: {
    height: 50,
    width: 390,
    backgroundColor: "whitesmoke",
  },
  itemPickerPromptStyle: {
    color: "gray",
    backgroundColor: "whitesmoke",
  },
});
