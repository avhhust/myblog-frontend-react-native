import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import {styles} from '../styles/createPostStyles.js'

export default function CreatePostBody({ navigation}) {       
  const btnSubmit = () => {navigation.navigate('Posts') };    

  return (
    <View style={styles.mainContainer}>
      <View style={[styles.inputContainer, { height: "58.5%" }]}>
        <TextInput
          style={[styles.inputField, styles.headerField]}     
        />
        <TextInput
          style={[{ height: 400 }, styles.inputField]}        
          placeholder="Type post's body"
          multiline={true}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <Button title="Next" onPress={btnSubmit}/>
      </View>
    </View>
  );
}