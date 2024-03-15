import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WeatherInformationScreen from "./src/components/screens/WeatherInformationScreen";
import { StyleSheet } from "react-native";
import WeatherPostsScreen from "./src/components/screens/WeatherPostsScreen";

export default function App() {
  // Intialisation ------------------------------------
  const stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  // View ---------------------------------------------
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Posts">
        <Tab.Screen name="Weather" component={WeatherInformationScreen} />
        <Tab.Screen name="Posts" component={WeatherPostsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
