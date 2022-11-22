import { StyleSheet, View, Text, Image, Pressable } from "react-native";

export default function Post(props) {
  const {title, briefTitle, previewPhoto} = props;
  return (
    <View style={renderStyle.mainContainer}>
      <Pressable style={renderStyle.pressableContainer}>
        <View style={renderStyle.imageContainer}>
          <Image
            style={renderStyle.image}
            source={previewPhoto}
          />
        </View>
        <Text style={renderStyle.briefTitle}>{briefTitle}</Text>
      </Pressable>
    </View>
  );
}

const renderStyle = StyleSheet.create({
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
    fontWeight: "bold",
  },

  imageContainer: {
    width: "100%",
    height: "85%",
    borderBottomWidth: 1,
  },

  image: {
    flex: 1,
    borderRadius: 10,
    marginBottom: 7
  }
});

// class Post {
//   _id;
//   _briefTitle;
//   _title;
//   _body;
//   _previewPhoto;
//   static numInstances;

//   constructor(){
//     this._id = ++Post.numInstances;
//   }

//   static getPostWithArguments(briefTitle, title, body, previewPhoto) {
//     let post = new Post();
//     post.briefTitle = briefTitle;
//     post.title = title;
//     post.body = body;
//     post.previewPhoto = previewPhoto;
//     return post;
//   }

//   get id() {
//     return this._id;
//   }

//   set briefTitle(briefTitle) {
//     this._briefTitle = briefTitle;
//   }
//   get briefTitle() {
//     return this._briefTitle;
//   }

//   set title(title) {
//     this._title = title;
//   }
//   get title() {
//     return this._title;
//   }

//   set body(body) {
//     this._body = body;
//   }
//   get body() {
//     return this._body;
//   }

//   set previewPhoto(previewPhoto) {
//     this._previewPhoto = previewPhoto;
//   }
//   get previewPhoto() {
//     returnthis._previewPhoto;
//   }
// }

// export default Post;
