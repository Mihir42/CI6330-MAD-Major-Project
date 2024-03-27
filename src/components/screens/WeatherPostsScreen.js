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
import React, { useEffect, useState } from "react";
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
    navigation.navigate("Posts");
  };

  const handleModify = (updatedPost) => {
    setPost(
      posts.map((post) =>
        post.postID === updatedPost.postID ? updatedPost : post
      )
    );
  };

  const handleDelete = (post) => {
    setPost(posts.filter((item) => item.postID !== post.postID));
  };

  const onAdd = (post) => {
    handleAdd(post);
    navigation.goBack;
  };

  const onModify = (post) => {
    handleModify(post);
    navigation.navigate("Posts");
  };

  const onDelete = (post) => {
    handleDelete(post);
    navigation.goBack();
  };

  const goToAddScreen = () => navigation.navigate("AddPosts", { onAdd });

  const goToEditScreen = (post) =>
    navigation.navigate("EditPosts", { post, onModify });

  // View ------------------------------------------------

  return (
    <ScrollView style={styles.component}>
      <Pressable style={styles.addPostButton} onPress={goToAddScreen}>
        <Text style={styles.buttonText}>Add Post</Text>
      </Pressable>

      {posts.map((post) => {
        return (
          <Card
            key={post.postID}
            singlePost={post}
            goToEditScreen={() => goToEditScreen(post)}
            onDelete={() => onDelete(post)}
          >
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
