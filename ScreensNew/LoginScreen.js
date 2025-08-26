// ScreensNew/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import styles from './styles';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email && password) {
      Alert.alert("Login Info", `Email: ${email}\nPassword: ${password}`);
      navigation.replace('MainApp'); // Navigate to MainApp
    } else {
      alert('Please enter Email & Password');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login Screen</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#666"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#666"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <View style={{ marginTop: 10, width: '100%' }}>
        <Button title="Login" onPress={handleLogin} />
      </View>
    </View>
  );
}


