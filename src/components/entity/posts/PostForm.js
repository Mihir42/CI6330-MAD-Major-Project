import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Form from "../../UI/Form";

const defaultPost = {
  postID: null,
  postTitle: null,
  postDescription: null,
  postImage: null,
};

const PostForm = ({ orginalPost, onSubmit, onCancel }) => {
  // Initialisation --------------------------
  defaultPost.postID = Math.floor(Math.random() * (100 - 10)) + 10;
  defaultPost.postImage =
    "https://static.wikia.nocookie.net/dougdoug/images/c/cd/DougDoug.jpg/revision/latest?cb=20210727020807";

  // State -----------------------------------
  const [post, setPost] = useState(orginalPost || defaultPost);

  // Handlers --------------------------------
  const handleRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };
  const handleChange = (field, value) => {
    setPost({ ...post, [field]: value });
  };
  const handleSubmit = () => onSubmit(post);

  // View -----------------------------------
  const submitLabel = orginalPost ? "Modify" : "Add";

  return (
    <Form onsubmit={handleSubmit} onCancel={onCancel} submitLabel={submitLabel}>
      <Form.InputText
        label="Post title"
        value={post.PostTitle}
        onChange={(value) => handleChange("postTitle", value)}
      />
      <Form.InputText
        label="Post Description"
        value={post.postDescription}
        onChange={(value) => handleChange("postDescription", value)}
      />
      <Form.InputText
        label="Post Image URL"
        value={post.postImage}
        onChange={(value) => handleChange("postImage", value)}
      />
    </Form>
  );
};

const styles = StyleSheet.create({
  itemLabel: {
    color: "grey",
    fontSize: 16,
    marginBottom: 5,
  },
  itemTextInput: {
    height: 50,
    paddingLeft: 10,
    fontSize: 16,
    backgroundColor: "white",
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "lightgray",
  },
});

export default PostForm;
