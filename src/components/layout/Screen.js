import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

export const Screen = ({ children }) => {
  // Initialisation --------------------------
  // State -----------------------------------
  // Handlers --------------------------------
  // View ------------------------------------
  return (
    <View style={styles.screen}>
      {children}
      <StatusBar backgroundColor="#005478" />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 15,
    flex: 1,
    backgroundColor: '#005478',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
});

export default Screen;
