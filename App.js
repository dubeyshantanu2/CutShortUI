import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from "./app/screens/SplashScreen";
import HomeScreen from "./app/screens/HomeScreen";
import RequestScreen from "./app/screens/RequestScreen";
import SendScreen from "./app/screens/SendScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Request" component={RequestScreen} />
        <Stack.Screen name="Send" component={SendScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;