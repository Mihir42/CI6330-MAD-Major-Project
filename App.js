import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WeatherInformationScreen from './src/components/screens/WeatherInformationScreen';
import { StyleSheet } from 'react-native';
import WeatherPostsScreen from './src/components/screens/WeatherPostsScreen';
import { Feather } from '@expo/vector-icons';
import WeatherAddPostScreen from './src/components/screens/WeatherAddPostScreen';
import { MenuProvider } from 'react-native-popup-menu';

export default function App() {
  // Intialisation ------------------------------------
  const Tab = createBottomTabNavigator();
  // View ---------------------------------------------
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Posts"
        screenOptions={{ headerShown: false }}
      >
        <Tab.Screen
          name="Weather"
          component={WeatherInformationScreen}
          options={{
            tabBarIcon: () => <Feather name="cloud" size={28} color="black" />,
          }}
        />
        <Tab.Screen
          name="Posts"
          component={WeatherPostsScreen}
          options={{
            tabBarIcon: () => <Feather name="upload" size={28} color="black" />,
          }}
        />
        <Tab.Screen
          name="AddPosts"
          component={WeatherAddPostScreen}
          options={{
            tabBarIcon: () => <Feather name="upload" size={28} color="black" />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function StackScreens() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="AddPosts" component={WeatherAddPostScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
