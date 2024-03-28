import { ScrollView, StyleSheet, Text, View } from 'react-native';
import FullWidthImage from 'react-native-fullwidth-image';
import React from 'react';
import PopUpMenu from './PopUpMenu';

const Card = ({ singlePost, goToEditScreen, onDelete }) => {
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
      <View style={styles.innerContainer}>
        <View>
          <Text style={styles.cardHeading}>{singlePost.postTitle}</Text>
          <Text style={styles.postDescription}>
            {singlePost.postDescription}
          </Text>
        </View>
        <PopUpMenu
          style={styles.icon}
          goToEditScreen={goToEditScreen}
          singlePost={singlePost}
          onDelete={onDelete}
        />
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
    borderBottomColor: 'white',
    borderBottomWidth: 1,
  },
  cardHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    width: 250,
    alignSelf: 'flex-start',
  },
  postDescription: {
    color: 'white',
    width: 250,
    alignSelf: 'flex-start',
  },
  image: { borderRadius: 13 },
  icon: {
    flexDirection: 'column',
    flex: 1,
  },
  icon: { position: 'absolute' },
  innerContainer: { flexDirection: 'row' },
  textContainer: { flexDirection: 'column' },
});

{
  /* <Feather
  style={styles.moreVertical}
  name="more-vertical"
  size={24}
  color={"white"}
/>; */
}
