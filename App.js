import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WeatherInformationScreen from "./src/components/screens/WeatherInformationScreen";
import { StyleSheet } from "react-native";
import WeatherPostsScreen from "./src/components/screens/WeatherPostsScreen";

export default function App() {
  // Intialisation ------------------------------------
  const stack = createNativeStackNavigator();
  // View ---------------------------------------------
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Posts">
        <stack.Screen name="Weather" component={WeatherInformationScreen} />
        <stack.Screen name="Posts" component={WeatherPostsScreen} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
