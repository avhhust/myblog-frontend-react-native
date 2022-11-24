import React from 'react';
import { useEffect, useState } from 'react';
import { Button, FlatList, TouchableOpacity, View } from 'react-native';
import Post from '../components/Post';
import PostService from '../networking/PostService';

export default function PostList({ navigation, route }) {
  const [isLoading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    setLoading(true);
    initData();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    setTimeout(() => initData(), 1500);
  };

  const initData = async () => {
    await PostService.getMostPopularPosts()
      .then((result) => setPosts(result))
      .catch((err) => console.error(err))
      .finally(() => {
        setRefreshing(false);
      });
  };

  const renderPost = ({ item }) => (
    <TouchableOpacity onPress={goToPostPreview} style={{zIndex: 999, borderWidth: 1}}>
      <Post briefTitle={item.metaTitle} image={''} title='' />
    </TouchableOpacity>
  );

  const goToAddPost = () => {
    navigation.navigate('Brief Description');
  };

  const goToPostPreview = () => {
    console.log('Button was pressed');
    navigation.navigate('Post Preview');
  };

  return (
    <View>
      <FlatList
        style={{ height: '92%' }}
        data={posts}
        renderItem={renderPost}
        refreshing={refreshing}
        onRefresh={onRefresh}
        keyExtractor={(post) => post.id}
      />
      <Button title='Create Post' onPress={goToAddPost} />
    </View>
  );
}
