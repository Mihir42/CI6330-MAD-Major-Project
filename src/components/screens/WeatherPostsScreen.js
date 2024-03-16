import {
  ScrollView,
  StyleSheet,
  Button,
  Text,
  View,
  Pressable,
} from "react-native";
import Card from "../UI/Card";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import initialPosts from "../../data/userPosts";

const WeatherPostsScreen = ({ navigation }) => {
  // Intialisation ------------------------------------
  // State --------------------------------------------
  const [posts, setPost] = useState(initialPosts);
  // Handlers -----------------------------------------
  const onAdd = () => {
    navigation.navigate("AddPosts");
  };
  // View ------------------------------------------------

  return (
    <ScrollView style={styles.component}>
      <Pressable style={styles.addPostButton} onPress={onAdd}>
        <Text style={styles.buttonText}>Add Post</Text>
      </Pressable>
      {posts.map((post) => {
        return (
          <Card key={post.postID} singlePost={post}>
            {post.postTitle}
          </Card>
        );
      })}
    </ScrollView>
  );
};

export default WeatherPostsScreen;

const styles = StyleSheet.create({
  component: {
    backgroundColor: "#005478",
  },
  addPostButton: {
    width: 380,
    alignItems: "center",
    justifyContent: "center",
    margin: 15,
    marginTop: 45,
    marginBottom: 50,
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 5,
    backgroundColor: "white",
  },
  buttonText: {
    color: "black",
  },
});
