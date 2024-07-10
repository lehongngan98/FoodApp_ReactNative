// In App.js in a new project


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/authScreens/SignInScreen';
import WelcomeScreen from '../screens/authScreens/WelcomeScreen';

import RootClientTabs from './ClientTab';
import RestaurantsMapScreen from '../screens/RestaurantsMapScreen';
import DrawerNavigator from './DrawerNavigator';
import RestaurantSearchSreen from '../screens/RestaurantSearchSreen';
import RestaurantHomeScreen from '../screens/RestaurantHomeScreen';
import CreateAccountScreen from '../screens/authScreens/CreateAccountScreen';




const Stack = createNativeStackNavigator();

function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen name="SignIn" component={SignInScreen} options={{headerShown:false}}/>
        <Stack.Screen name="SignUp" component={CreateAccountScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} options={{headerShown:false}}/>
        <Stack.Screen name="RestaurantsMapScreen" component={RestaurantsMapScreen} options={{headerShown:true}}/>
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;