import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View, Button } from 'react-native';
import Screen from '../layout/Screen';
import RenderCount from '../UI/RenderCount';
import WeatherInfo from '../UI/WeatherInfo';
import { Share } from 'react-native';
import API from '../API/API';
import { Feather } from '@expo/vector-icons';
import { weatherImages } from '../UI/weatherImages';

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
    last_updated: '2024-02-27 18:45',
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
    wind_dir: 'SW',
    wind_kph: 9,
    wind_mph: 5.6,
  },
  location: {
    country: 'United Kingdom',
    lat: 51.52,
    localtime: '2024-02-27 18:56',
    localtime_epoch: 1709060178,
    lon: -0.11,
    name: 'Dummy London',
    region: 'City of London, Greater London',
    tz_id: 'Europe/London',
  },
};

const WeatherInformationScreen = () => {
  // Intialisation ------------------------------------
  const weatherEndpoint =
    'http://api.weatherapi.com/v1/current.json?key=8c36386ccc784250871133222242102&q=London';

  // State --------------------------------------------
  const [weather, setWeather] = useState(dummyWeather);
  const [isLoading, setIsLoading] = useState(true);

  // Handlers -----------------------------------------

  const loadWeather = async (weatherEndpoint) => {
    const response = await API.get(weatherEndpoint);
    setIsLoading(false);
    if (response.isSuccess) setWeather(response.result);
  };

  useEffect(() => {
    loadWeather(weatherEndpoint);
  }, []);

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
      console.log('Error -> ', error);
    }
  };

  // View ------------------------------------------------
  return (
    <Screen>
      <Feather
        style={styles.containerTop}
        name="share"
        size={28}
        color="white"
        onPress={handleWeather}
      />
      <Image
        style={styles.imageIcon}
        source={weatherImages[weather.current.condition.text]}
      />
      <Text style={styles.textHeaderTemp}>{weather.current.temp_c}°C</Text>
      <Text style={styles.textHeader}>
        {weather.location.name}, {'\n'}
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
    backgroundColor: '#fff',
  },
  containerTop: {
    alignSelf: 'flex-start',
    verticalAlign: 'top',
    flex: 1,
  },
  containerBottom: {
    flex: 1,
    marginBottom: 100,
    marginTop: 50,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  textHeader: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
  },
  textHeaderTemp: {
    fontWeight: 'bold',
    fontSize: 44,
    color: 'white',
    textAlign: 'center',
  },
  textNormal: {
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
  imageIcon: {
    marginTop: 50,
    width: 100,
    height: 100,
  },
});
