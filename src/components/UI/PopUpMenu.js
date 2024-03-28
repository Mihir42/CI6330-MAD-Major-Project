import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  MenuProvider,
} from 'react-native-popup-menu';
import { StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { NavigationAction } from '@react-navigation/native';

export const PopUpMenu = ({
  navigation,
  goToEditScreen,
  singlePost,
  onDelete,
}) => {
  // Intitialisation ---------------------------------
  // State -------------------------------------------
  // Handlers ----------------------------------------
  // View --------------------------------------------
  return (
    <MenuProvider skipInstanceCheck>
      <Menu style={styles.menuContainer}>
        <MenuTrigger style={styles.menuTriggerText}>
          <Feather
            style={styles.moreVertical}
            name="more-vertical"
            size={34}
            color={'white'}
          />
        </MenuTrigger>
        <MenuOptions style={styles.optionsContainer}>
          <MenuOption value={1} text="Edit" onSelect={goToEditScreen} />
          <MenuOption value={2} text="Delete" onSelect={onDelete} />
        </MenuOptions>
      </Menu>
    </MenuProvider>
  );
};

export default PopUpMenu;

const styles = StyleSheet.create({
  menuContainer: {
    alignItems: 'flex-end',
  },
  menuTriggerText: {
    color: 'white',
  },
  moreVertical: {
    alignSelf: 'flex-end',
    width: 30,
    height: 80,
  },
  optionsContainer: {
    justifyContent: 'flex-end',
  },
});
