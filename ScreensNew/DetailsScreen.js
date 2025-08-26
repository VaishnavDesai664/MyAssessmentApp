import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';

const DetailsScreen = ({ route }) => {
  const { post } = route.params;

  return (
    <SafeAreaView style={styles.containerDetails}>
      <View style={styles.postCardDetails}>
        <Text style={styles.postTitleDetails}>{post.title}</Text>
        <Text style={styles.postBodyDetails}>{post.body}</Text>
      </View>
    </SafeAreaView>
  );
};

export default DetailsScreen;


