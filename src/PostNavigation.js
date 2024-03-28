import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import WeatherAddPostScreen from './components/screens/WeatherAddPostScreen';
import WeatherPostsScreen from './components/screens/WeatherPostsScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WeatherEditPostScreen from './components/screens/WeatherEditPostScreen';

const Stack = createNativeStackNavigator();

const PostNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="PostScreen" component={WeatherPostsScreen} />
      <Stack.Screen name="AddPosts" component={WeatherAddPostScreen} />
      <Stack.Screen name="EditPosts" component={WeatherEditPostScreen} />
    </Stack.Navigator>
  );
};

export default PostNavigation;

const styles = StyleSheet.create({});
