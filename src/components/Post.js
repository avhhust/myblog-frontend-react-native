import { StyleSheet, View, Text, Image, Pressable } from 'react-native';
import { renderStyle } from '../styles/renderPostStyles';

function Post(props) {
  const { title, briefTitle, previewPhoto } = props;
  return (
    <>
      <View style={renderStyle.mainContainer}>
        <Pressable style={renderStyle.pressableContainer}>
          <View style={renderStyle.imageContainer}>
            <Image style={renderStyle.image} source={previewPhoto} />
          </View>
          <Text style={renderStyle.briefTitle}>{briefTitle}</Text>
        </Pressable>
      </View>
    </>
  );
}

export default Post;
