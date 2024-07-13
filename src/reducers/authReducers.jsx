import { View, Text } from 'react-native'
import React from 'react'

const SignInReducers = (state, action) => {
    switch (action.type) {
        case 'UPDATE_SIGN_IN':
            return {
                userToken: action.payload.userToken
            };

       
        default:
            return state
    }
}

export default SignInReducers