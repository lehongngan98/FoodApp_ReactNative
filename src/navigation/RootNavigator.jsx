import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SignInContext } from '../contexts/authContext';
import AppStack from './AppStack';
import AuthStack from './AuthStack';

function RootNavigator() {
    const { signedIn } = useContext(SignInContext);

    return (
        <NavigationContainer>
            {signedIn.userToken !== 'signed-in' ? <AuthStack /> : <AppStack />}
        </NavigationContainer>
    );
}

export default RootNavigator;
