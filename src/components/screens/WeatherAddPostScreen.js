import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  LogBox,
} from "react-native";
import Screen from "../layout/Screen";
import React, { useState } from "react";
import PostForm from "../entity/posts/PostForm";

const WeatherAddPostScreen = ({ route, navigation }) => {
  // Intialisation ------------------------------------
  LogBox.ignoreLogs([
    "Non-serializable values were found in the navigation state",
  ]);
  const { onAdd } = route.params;
  // State --------------------------------------------
  // Handlers -----------------------------------------
  const handleCancel = navigation.goBack;
  // View ------------------------------------------------
  return (
    <Screen>
      <PostForm onSubmit={onAdd} onCancel={handleCancel} />
    </Screen>
  );
};

export default WeatherAddPostScreen;

const styles = StyleSheet.create({
  formLabel: {
    left: 10,
    color: "white",
  },
  input: {
    width: 380,
    height: 50,
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "#005478",
    color: "white",
  },
});
