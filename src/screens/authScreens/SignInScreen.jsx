import { Alert, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../components/Header';
import { Colors, Sizes } from '../../global/style';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { SocialIcon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../../../firebaseConfig.js'

const SignInScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigation = useNavigation();

    const auth = getAuth(app);

    const handleSignIn = () => {
        if (email === "" || password === "") {
            Alert.alert("Error", "Email and Password fields cannot be empty.");
            return;
        }

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("Signed in with:", user.email);
                navigation.navigate('DrawerNavigator')

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                Alert.alert("Sign In Error", errorMessage);
            });
    };

    

    return (
        <SafeAreaView style={styles.container}>


            <StatusBar barStyle={'dark-content'} backgroundColor={Colors.statusBar} />

            <Header title={"My Account"} type={'arrow-left'} />

            <View style={styles.signinContainer}>
                <Text style={styles.signintext}>Welcome back</Text>
            </View>



            <View style={styles.input}>

                <View style={styles.emailInput}>
                    <Feather name="mail" size={24} color="black" />
                    <TextInput
                        placeholder='Email'
                        style={styles.textInput}
                        onChangeText={setEmail}
                        value={email}
                    />
                </View>
                <View style={styles.passwordInput}>
                    <FontAwesome name="lock" size={24} color="black" />
                    <TextInput
                        placeholder='Password'
                        style={styles.textInput}

                        onChangeText={setPassword}
                        value={password}
                        secureTextEntry
                    />
                </View>

                <Text
                    style={{ color: 'red', fontSize: Sizes.title, marginTop: 20, fontWeight: 500, fontStyle: 'italic' }}
                >Forget password?</Text>
            </View>

            <TouchableOpacity style={styles.buttonSignin}
                onPress={handleSignIn}
            >
                <Text
                    style={{ color: 'black', fontSize: Sizes.h3, padding: 6, fontWeight: 500, textAlign: 'center' }}
                >Sign In</Text>
            </TouchableOpacity>




            <Text style={{ fontSize: 20, marginTop: 30 }}>Or</Text>

            <View style={{
                width: '100%',
                alignItems: 'center',
                marginTop: 20,
            }}>
                <SocialIcon
                    title='Sign In With Facebook'
                    button
                    type='facebook'
                    style={styles.SocialIcon}
                    onPress={() => { }}
                />
                <SocialIcon
                    title='Sign In With Gmail'
                    button
                    type='google'
                    style={styles.SocialIcon}
                    onPress={() => { }}

                />
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Text style={{ fontSize: 18, marginTop: 30 }}>Don't have an account?</Text>
                <Text style={{ fontSize: 18, marginTop: 30, color: 'tomato', fontWeight: 500, fontStyle: 'italic' }}
                    onPress={() => {
                        console.log("Sign Up");

                    }}
                > Sign Up</Text>
            </View>
        </SafeAreaView>
    );

}

export default SignInScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: 'center',
    },

    signinContainer: {
        marginTop: 30,
        alignItems: 'center',
    },
    signintext: {
        fontSize: Sizes.h1,
        fontWeight: 'bold',

    },
    input: {
        marginTop: 50,
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center',

    },

    emailInput: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        justifyContent: 'center',
        width: '80%',
        borderWidth: 0.5,
        borderRadius: 10,
        borderColor: Colors.grey4,
        backgroundColor: 'white',
        //do bong
        shadowColor: Colors.grey1,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,



    },
    passwordInput: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        justifyContent: 'center',
        width: '80%',
        borderWidth: 0.5,
        borderRadius: 10,
        borderColor: Colors.grey4,
        backgroundColor: 'white',
        //do bong
        shadowColor: Colors.grey1,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginTop: 20,
    },

    textInput: {
        padding: 10,
        width: '85%',


    },
    buttonSignin: {
        alignItems: 'center',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: '60%',
        borderRadius: 10,
        backgroundColor: Colors.primary,
        marginTop: 30,
    },
    SocialIcon: {
        height: 50,
        borderRadius: 10,
        width: '60%',


    }

})