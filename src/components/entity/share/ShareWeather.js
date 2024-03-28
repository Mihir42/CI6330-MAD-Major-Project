// ACKNOWLEDING EXTERNAL CONTENT
// Some of the following code was wholly, or in part, taken or adapted from the following online source(s):
// https://www.youtube.com/watch?v=vXzpEJeVmi8&pp=ygUZcmVhY3Qtc29jaWFsIHNoYXJlIG5hdGl2ZQ%3D%3D

import { Share } from "react-native";
import { Feather } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

const ShareWeather = ({ currentWeather }) => {
  const handleWeather = async () => {
    const shareOptions = {
      message: ` ${currentWeather.location.name} ${
        currentWeather.current.condition.text
      } ${
        currentWeather.current.temp_c
      }°C ${currentWeather.location.localtime.slice(10, 16)}  `,
      url: `${currentWeather.current.condition.icon}`,
    };
    try {
      const shareResponse = await Share.share(shareOptions);
    } catch (error) {
      console.log("Error -> ", error);
    }
  };

  return (
    <Feather
      style={styles.containerTop}
      name="share"
      size={28}
      color="white"
      onPress={handleWeather}
    />
  );
};

const styles = StyleSheet.create({
  containerTop: {
    alignSelf: "flex-start",
    verticalAlign: "top",
    flex: 0.5,
    marginTop: 30,
  },
});

export default ShareWeather;
