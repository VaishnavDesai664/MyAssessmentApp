import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import styles from "./styles";

const CounterScreen = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.containerCounter}>
      <Text style={styles.counterTextCounter}>Counter {count}</Text>
      <View style={styles.buttonRowCounter}>
        <Button title="+" onPress={() => setCount(count + 1)} />
        <Button
          title="-"
          onPress={() => {
            if (count > 0) {
              setCount(count - 1);
            }
          }}
        />
      </View>
    </View>
  );
};

export default CounterScreen;

