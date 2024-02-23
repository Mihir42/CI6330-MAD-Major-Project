import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import API from './src/components/API/API';
import WeatherInformationScreen from './src/components/API/screens/WeatherInformationScreen';

export default function App() {
  // Intialisation ------------------------------------
  const weatherEndpoint =
    'http://api.weatherapi.com/v1/current.json?key=8c36386ccc784250871133222242102&q=London&aqi=no';
  // 'https://softwarehub.uk/unibase/api/modules/1';

  // State --------------------------------------------
  const [weather, setWeather] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const loadWeather = async (endpoint) => {
    const response = await API.get(endpoint);
    setIsLoading(false);
    if (response.isSuccess) setWeather(response.result);
  };
  // Handlers -----------------------------------------
  useEffect(() => {
    loadWeather(weatherEndpoint);
  }, []);

  // console.log(weather.current.condition.icon);

  // View ---------------------------------------------
  return (
    <View style={styles.container}>
      {!isLoading && weather ? (
        <View>
          <View style={styles.viewCenter}>
            <Image
              style={styles.imageIcon}
              source={{ uri: `https:${weather.current.condition.icon}` }}
            />
            <Text style={styles.textHeader}>
              {weather.location.name}, {weather.current.condition.text},{' '}
              {weather.current.temp_c}°C
            </Text>
          </View>
          <View style={styles.viewBottom}>
            <Text style={styles.textNormal}>
              Wind(kph): {weather.current.wind_kph}, Humidity:{' '}
              {weather.current.humidity}% UV: {weather.current.uv}
            </Text>
          </View>
        </View>
      ) : (
        <View>
          <Text>Fooked</Text>
        </View>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewCenter: { padding: 30, marginBottom: 200, alignContent: 'center' },
  viewBottom: {},
  textHeader: {
    fontWeight: 'bold',
    fontSize: 30,
    verticalAlign: 'middle',
    textAlignVertical: 'center',
  },
  textNormal: { fontSize: 20, textAlign: 'center' },
  imageIcon: {
    width: 120,
    height: 120,
    borderWidth: 5,
    borderColor: 'black',
    marginLeft: 60,
  },
});
