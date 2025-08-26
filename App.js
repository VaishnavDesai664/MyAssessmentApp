// App.js
import React, { useState } from 'react';
import {
  Button,
  View,
  Text,
  StyleSheet,
  TextInput,
  Alert,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SettingsScreen from './ScreensNew/CounterScreen';
import DetailsScreen from './ScreensNew/DetailsScreen';
import PostsScreen from './ScreensNew/PostsScreen';
import CounterScreen from './ScreensNew/CounterScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email && password) {
      Alert.alert("Login Info", `Email: ${email}\nPassword: ${password}`);
      navigation.replace('MainApp'); // replace so user can't go back
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
        value={password}
        onChangeText={setPassword}
      />

      <View style={{ marginTop: 10, width: '100%' }}>
        <Button title="Login" onPress={handleLogin} />
      </View>
    </View>
  );
}

// ✅ Home Stack
function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="PostsScreen"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Posts Screen" component={PostsScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

// ✅ Settings Stack
function SettingsStack() {
  return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

// ✅ Bottom Tabs (Main App)
function MainApp() {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        headerStyle: { backgroundColor: '#f2f2f2' },
        headerTintColor: '#000',
        headerTitleStyle: { fontWeight: 'bold' },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="PostsScreen"
        component={HomeStack}
        options={{ tabBarLabel: 'Posts Screen', title: 'Posts Screen' }}
      />
      <Tab.Screen
        name="CounterScreen"
        component={CounterScreen}
        options={{ tabBarLabel: 'Counter Screen', title: 'Counter Screen' }}
      />
    </Tab.Navigator>
  );
}

// ✅ Root Stack (Login + MainApp)
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="MainApp" component={MainApp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  header: { fontSize: 24, marginBottom: 20 },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
  },
});
