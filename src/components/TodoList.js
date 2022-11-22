import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  Button,
} from "react-native";
import { useState } from "react";


export default function TodoList() {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);

  return (
    <View style={{ flex: 1 }}>

      <View style={styles.inputContainer}>

        <TextInput 
          style={styles.inputField} 
          placeholder="Type todo's name"
          onChangeText={(text) => setTodo(text)} 
        />

        {/* <Button title="ADD" onPress={}/> */}

      </View>

      <View style={styles.todoContainer}>

        <Text style={[styles.text, {marginBottom: 10}]}>List of Todos:</Text>
        

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 18,
  },

  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "white",
  },

  inputField: {
    width: "80%",
    padding: 7,
    fontSize: 18,
    borderRadius: 5,
    backgroundColor: "white",
  },

  todoContainer: {
    flex: 6,
  },
});
