import {
  ScrollView,
  StyleSheet,
  Button,
  Text,
  View,
  Pressable,
  LogBox,
} from "react-native";
import Card from "../UI/Card";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import initialPosts from "../../data/userPosts";

const WeatherPostsScreen = ({ navigation }) => {
  // Intialisation ------------------------------------
  LogBox.ignoreLogs([
    "Non-serializable values were found in the navigation state",
  ]);
  // State --------------------------------------------
  const [posts, setPost] = useState(initialPosts);
  // Handlers -----------------------------------------
  const handleAdd = (post) => {
    setPost([...posts, post]);
    navigation.goBack();
  };

  const onAdd = (post) => {
    handleAdd(post);
    navigation.goBack;
  };

  const goToViewScreen = (post) => {
    navigation.navigate("Posts", { post });
  };

  const goToAddScreen = () => navigation.navigate("AddPosts", { onAdd });

  // View ------------------------------------------------

  return (
    <ScrollView style={styles.component}>
      <Pressable style={styles.addPostButton} onPress={goToAddScreen}>
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
