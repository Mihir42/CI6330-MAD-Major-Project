import { ScrollView, StyleSheet, Text, View } from 'react-native';
import FullWidthImage from 'react-native-fullwidth-image';
import React from 'react';
import PopUpMenu from './PopUpMenu';

const Card = ({ singlePost }) => {
  // Intialisation ------------------------------------
  // State --------------------------------------------
  // Handlers -----------------------------------------

  // View ------------------------------------------------
  return (
    <View style={styles.cardComponent}>
      <FullWidthImage
        style={styles.image}
        source={{ uri: singlePost.postImage }}
      />
      <View style={styles.iconContainer}>
        <Text style={styles.cardHeading}>{singlePost.postTitle}</Text>
        <Text style={styles.postDescription}>{singlePost.postDescription}</Text>
        <PopUpMenu style={styles.icon} />
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  contentContainer: {
    paddingBottom: 40,
  },
  cardComponent: {
    padding: 3,
    paddingBottom: 20,
    borderRadius: 20,
    margin: 5,
    marginHorizontal: 15,
  },
  cardHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
    width: 250,
  },
  postDescription: {
    color: 'white',
    width: 250,
  },
  image: { borderRadius: 13 },
  iconContainer: {
    flexDirection: 'column',
  },
});

{
  /* <Feather
  style={styles.moreVertical}
  name="more-vertical"
  size={24}
  color={"white"}
/>; */
}
