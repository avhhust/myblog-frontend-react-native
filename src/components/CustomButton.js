import { Pressable, Text, View, StyleSheet } from "react-native";

export default function CustomButton(props) {
  return (
    <View style={styles.wrapper}>
      <Pressable style={styles.button}>
        <Text style={styles.text}>{props.title}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '31%',
  },

  button: {
    padding: 10,
    alignItems:'center',
    borderRadius: 10,
    backgroundColor: '#ADD8E6'
  },

  text: {
    fontWeight: "bold"
  }
});