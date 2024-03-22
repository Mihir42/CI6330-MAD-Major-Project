import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  MenuProvider,
} from "react-native-popup-menu";
import { StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

export const PopUpMenu = () => {
  // Intitialisation ---------------------------------
  // State -------------------------------------------
  // Handlers ----------------------------------------
  // View --------------------------------------------
  return (
    <MenuProvider skipInstanceCheck>
      <Menu>
        <MenuTrigger style={styles.menuTriggerText}>
          <Feather
            style={styles.moreVertical}
            name="more-vertical"
            size={24}
            color={"white"}
          />
        </MenuTrigger>
        <MenuOptions>
          <MenuOption value={1} text="One" />
          <MenuOption value={2} text="Two" />
        </MenuOptions>
      </Menu>
    </MenuProvider>
  );
};

export default PopUpMenu;

const styles = StyleSheet.create({
  menuTriggerText: {
    color: "white",
  },
});
