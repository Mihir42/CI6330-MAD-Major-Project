import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

export const Screen = ({ children }) => {
  // Initialisation --------------------------
  // State -----------------------------------
  // Handlers --------------------------------
  // View ------------------------------------
  return (
    <View style={styles.screen}>
      {children}
      <StatusBar style="light" />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 15,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Screen;
