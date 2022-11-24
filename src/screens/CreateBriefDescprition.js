import { useState } from 'react';
import { Button, Image, ScrollView, TextInput, View } from 'react-native';
import { styles } from '../styles/createPostStyles';
import * as ImagePicker from 'expo-image-picker';
import Post from '../components/Post';

export default function CreateBriefDescprition({ navigation }) {
  const [image, setImage] = useState(null);
  const [briefTitle, setBriefTitle] = useState();

  const inputBriefTitle = (text) => {
    setBriefTitle(text);
  };

  const dropImage = () => {
    setImage(null);
  };

  const goToPostBody = () => {
    navigation.navigate('Post Body');
  };

  const ImagePickerAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Photo,
      allowsEditing: true,
      aspect: [3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          onChange={inputBriefTitle}
          style={[styles.inputField, styles.headerField]}
          placeholder='Type short header'
          maxLength={30}
        />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Button title='Choose photo' onPress={ImagePickerAsync} />
          <Button title='Drop' onPress={dropImage} />
        </View>
      </View>

      <View style={styles.imageContainer}>
        {image && (
          <Image
            resizeMode='cover'
            source={{ uri: image?.assets[0].uri }}
            style={styles.previewImage}
          />
        )}
      </View>
      {image && <Button title='Next' onPress={goToPostBody} />}
    </View>
  );
}
