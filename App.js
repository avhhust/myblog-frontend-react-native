import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreatePostBody from "./src/components/CreatePostBody"; 
import CreateBriefDescprition from "./src/components/CreateBriefDescprition";
import PostList from "./src/screens/PostList";
import PostPreview from "./src/components/PostPreview";       

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Posts' component={PostList} />    
        {/* <Stack.Screen name='Post Preview' component={PostPreview}/> */}
        <Stack.Screen name='Brief Description' component={CreateBriefDescprition} />
        <Stack.Screen name='Post Body' component={CreatePostBody} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}