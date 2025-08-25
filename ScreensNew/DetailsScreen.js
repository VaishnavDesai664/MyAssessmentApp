import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const DetailsScreen = ({ route }) => {
  const { post } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.postCard}>
        <Text style={styles.postTitle}>{post.title}</Text>
        <Text style={styles.postBody}>{post.body}</Text>
      </View>
    </SafeAreaView>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  postCard: {
    backgroundColor: "#f8f8f8",
    padding: 15,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#222",
  },
  postBody: {
    fontSize: 14,
    color: "#555",
    lineHeight: 20,
  },
});
