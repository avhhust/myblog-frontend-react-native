import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreatePostBody from "./src/components/CreatePostBody";
import CreateBriefDescprition from "./src/components/CreateBriefDescprition";
import PostsView from "./src/components/PostsView";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Posts' component={PostsView} />
        <Stack.Screen name='Brief Description' component={CreateBriefDescprition} />
        <Stack.Screen name='Post Body' component={CreatePostBody} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}