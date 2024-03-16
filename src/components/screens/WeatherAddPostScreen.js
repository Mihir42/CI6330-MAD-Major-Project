import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import Screen from "../layout/Screen";
import React, { useState } from "react";

const initialPost = {
  postTitle: "Rainy day",
  postDescription: "Rainy day in wales",
  postImage:
    "https://cdn.vox-cdn.com/thumbor/wfbQ3XccV6SxGMt1l6zBPL3Xg7o=/0x0:1192x795/1400x1050/filters:focal(596x398:597x399)/cdn.vox-cdn.com/uploads/chorus_asset/file/22312759/rickroll_4k.jpg",
};

const WeatherAddPostScreen = () => {
  // Intialisation ------------------------------------
  // State --------------------------------------------
  const [post, setPost] = useState(initialPost);
  // Handlers -----------------------------------------
  const inputText = (value) => {
    console.log(value);
  };

  const handleChange = (field, value) => {
    setPost({ ...post, [field]: value });
  };
  // View ------------------------------------------------

  return (
    <Screen>
      <View>
        <Text>Add post title</Text>
        <TextInput
          style={styles.input}
          value={post.postTitle}
          onChangeText={(value) => handleChange("postTitle", value)}
        />
        <Text>{post.postTitle}</Text>
        <Button title={"Submit post"} />
      </View>
    </Screen>
  );
};

export default WeatherAddPostScreen;

const styles = StyleSheet.create({
  input: {
    width: 380,
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "#005478",
    color: "white",
  },
});
