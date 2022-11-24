import { StyleSheet } from "react-native";

export const renderStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    height: 250,
    margin: 15,
    borderWidth: 1,
    borderRadius: 10,
  },

  pressableContainer: {
    flex: 1,
  },

  briefTitle: {
    padding: 10,
    fontWeight: 'bold',
  },

  imageContainer: {
    width: '100%',
    height: '85%',
    borderBottomWidth: 1,
  },

  image: {
    flex: 1,
    borderRadius: 10,
    marginBottom: 7,
  },
});
