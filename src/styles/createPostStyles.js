import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      marginTop: 10,
      marginBottom: 30,
      marginHorizontal: 20,
    },
  
    inputContainer: {
      marginBottom: 10,
      justifyContent: "space-between",
    },
  
    buttonsContainer: {
      flexDirection: "row",
      justifyContent: "center",
    },
  
    headerField: {
      fontWeight: "bold",
    },
  
    inputField: {
      width: "100%",
      padding: 7,
      borderWidth: 1,
      borderRadius: 10,
      fontSize: 16,
    },

    imageContainer: {
      height: '45%',
    },

    previewImage: {
      flex: 1,
      borderRadius: 10,
      marginBottom: 7
    }
  });