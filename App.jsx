// In App.js in a new project


import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from './src/screens/authScreens/SignInScreen';
import WelcomeScreen from './src/screens/authScreens/WelcomeScreen';
import HomeScreen from './src/screens/HomeScreen';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen name="SignIn" component={SignInScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;