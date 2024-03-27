import PostForm from "../entity/posts/PostForm";
import Screen from "../layout/Screen";
import { Text } from "react-native";
const WeatherEditPostScreen = ({ navigation, route }) => {
  // Intialisation ------------------------------------
  const { post, onModify } = route.params;

  // State --------------------------------------------
  // Handlers -----------------------------------------
  const handleCancel = navigation.goBack;

  // View ------------------------------------------------
  return (
    <Screen>
      <PostForm
        orginalPost={post}
        onSubmit={onModify}
        onCancel={handleCancel}
      />
    </Screen>
  );
};

export default WeatherEditPostScreen;
