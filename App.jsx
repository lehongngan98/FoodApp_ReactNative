import React from 'react';
import { SignInContextProvider } from './src/contexts/authContext';
import RootNavigator from './src/navigation/RootNavigator';
import { NavigationContainer } from '@react-navigation/native';

function App() {



    return (
        <SignInContextProvider>
           
                <RootNavigator />
            
        </SignInContextProvider>
    );
}

export default App;
