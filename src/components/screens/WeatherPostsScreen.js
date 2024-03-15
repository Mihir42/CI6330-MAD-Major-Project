import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Card from '../UI/Card';
import React, { useState } from 'react';

import initialPosts from '../../data/userPosts';

const WeatherPostsScreen = () => {
  // Intialisation ------------------------------------
  // State --------------------------------------------
  const [posts, setPost] = useState(initialPosts);
  // Handlers -----------------------------------------
  // View ------------------------------------------------

  return (
    <ScrollView style={styles.component}>
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
    backgroundColor: 'white',
  },
});
