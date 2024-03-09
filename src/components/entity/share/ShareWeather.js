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
    flex: 1,
  },
});

export default ShareWeather;
