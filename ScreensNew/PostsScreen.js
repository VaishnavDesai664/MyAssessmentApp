import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";

const PostsScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.log(err));
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.postCard}
      onPress={() => navigation.navigate("Details", { post: item })}
    >
      <Text style={styles.postTitle}>{item.title}</Text>
      <Text style={styles.postBody} numberOfLines={2}>
        {item.body}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.flexContainer}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 10 }}
        ListFooterComponent={() => (
          <View style={styles.footerBar}>
            <Text style={styles.footerText}>End of List</Text>
          </View>
        )}
      />
    </View>
  );
};

export default PostsScreen;

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  postCard: {
    backgroundColor: "#f8f8f8",
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
  },
  postTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  postBody: {
    fontSize: 14,
    color: "#555",
  },
  footerBar: {
    padding: 15,
    backgroundColor: "#eee",
    alignItems: "center",
    marginTop: 10,
    borderRadius: 6,
  },
  footerText: {
    fontSize: 16,
    color: "#333",
    fontWeight: "600",
  },
});
