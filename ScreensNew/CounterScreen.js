import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const CounterScreen = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Counter {count}</Text>
      <View style={styles.buttonRow}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  counterText: {
    fontSize: 40,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "bold",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
