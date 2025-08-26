// App.js
import React from 'react';
import { StatusBar } from 'react-native'; // ✅ Import StatusBar
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginScreen from './ScreensNew/LoginScreen';
import SettingsScreen from './ScreensNew/CounterScreen';
import DetailsScreen from './ScreensNew/DetailsScreen';
import PostsScreen from './ScreensNew/PostsScreen';
import CounterScreen from './ScreensNew/CounterScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// ✅ Home Stack (Posts + Details)
function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="PostsScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="PostsScreen" component={PostsScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

// ✅ Bottom Tabs (Main App)
function MainApp() {
  return (
    <Tab.Navigator
      initialRouteName="Home" // must match Tab.Screen name
      screenOptions={{
        headerStyle: { backgroundColor: '#f2f2f2' },
        headerTintColor: '#000',
        headerTitleStyle: { fontWeight: 'bold' },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{ tabBarLabel: 'Posts', title: 'Posts' }}
      />
      <Tab.Screen
        name="Counter"
        component={CounterScreen}
        options={{ tabBarLabel: 'Counter', title: 'Counter' }}
      />
    </Tab.Navigator>
  );
}

// ✅ Root Stack (Login + MainApp)
export default function App() {
  return (
    <>
      {/* ✅ Status Bar */}
      <StatusBar
        backgroundColor="#f2f2f2" // same as header background
        barStyle="dark-content" // dark text/icons
        translucent={false} // set true if you want content under status bar
      />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="MainApp" component={MainApp} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}  