import { View, Text } from 'react-native'
import React, { createContext, useEffect, useReducer } from 'react'
import SignInReducers from '../reducers/authReducers';

export const SignInContext = createContext();

export const SignInContextProvider = (props) => {
    const [signedIn, dispatchSignedIn] = useReducer(SignInReducers, {
        userToken: null,
    })

    
    return (
        <SignInContext.Provider value={{ signedIn, dispatchSignedIn }}>
            {props.children}
        </SignInContext.Provider>
    )
}

