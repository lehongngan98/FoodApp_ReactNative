import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import SearchScreen from '../screens/SearchScreen';
import RestaurantSearchSreen from '../screens/RestaurantSearchSreen';
import RestaurantHomeScreen from '../screens/RestaurantHomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getFocusedRouteNameFromRoute, useNavigation } from '@react-navigation/native';
import PreferenceScreen from '../screens/PreferenceScreen';

const Stack = createNativeStackNavigator();

const ClientSearchNavigator = ({route}) => {

   


    return (
        <Stack.Navigator initialRouteName='Search'>
            <Stack.Screen name="Search" component={SearchScreen} options={{ headerShown: false }} />
            <Stack.Screen name="RestaurantSearchSreen" component={RestaurantSearchSreen} options={{ headerShown: true }} />
            <Stack.Screen name="RestaurantHomeScreen" component={RestaurantHomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="PreferenceScreen" component={PreferenceScreen} options={{ headerShown: false }} />


        </Stack.Navigator>
    )
}

export default ClientSearchNavigator