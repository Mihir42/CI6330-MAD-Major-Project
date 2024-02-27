import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WeatherInformationScreen from "./src/components/screens/WeatherInformationScreen";
import { StyleSheet } from "react-native";

export default function App() {
  // Intialisation ------------------------------------
  const stack = createNativeStackNavigator();
  // View ---------------------------------------------
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Weather" component={WeatherInformationScreen} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
