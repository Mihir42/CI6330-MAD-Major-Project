import { ScrollView, StyleSheet, Text, View } from "react-native";
import FullWidthImage from "react-native-fullwidth-image";
import React from "react";

const Card = ({ singlePost }) => {
  // Intialisation ------------------------------------
  // State --------------------------------------------
  // Handlers -----------------------------------------
  // View ------------------------------------------------
  return (
    <View>
      <FullWidthImage source={{ uri: singlePost.postImage }} />
      <Text>{singlePost.postTitle}</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 20,
  },
});
