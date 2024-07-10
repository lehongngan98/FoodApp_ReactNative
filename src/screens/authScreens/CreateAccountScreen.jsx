import { Alert, Pressable, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../../components/Header'
import { Colors, Sizes } from '../../global/style'
import { Feather, FontAwesome, AntDesign, Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from '../../../firebaseConfig';


const CreateAccountScreen = () => {

    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const navigation = useNavigation();

    const auth = getAuth(app);

    const handleSignUp = () => {
        if (!phone || !name || !email || !password || !confirmPassword) {
            Alert.alert("Error", "All fields are required.");
            return;
        }

        if (password !== confirmPassword) {
            Alert.alert("Error", "Passwords do not match.");
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("User registered with:", user.email);
                Alert.alert("Success", "Account created successfully!");
                navigation.navigate('SignIn');
            })
            .catch((error) => {
                const errorMessage = error.message;
                Alert.alert("Sign Up Error", errorMessage);
            });
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={'dark-content'} backgroundColor={Colors.statusBar} />

            <Header title={"My Account"} type={'arrow-left'} />

            <ScrollView keyboardShouldPersistTaps='always'>
                <View style={styles.content}>
                    <Text style={styles.text}>Sign Up</Text>
                </View>

                {/* input infomation user */}
                <View style={styles.input}>

                    <View style={styles.phoneInput}>
                        <Entypo name="old-phone" size={24} color="gray" />
                        <TextInput
                            placeholder='Number Phone'
                            style={styles.textInput}
                            onChangeText={setPhone}
                            value={phone}
                            keyboardType='number-pad'

                        />
                    </View>

                    <View style={styles.nameInput}>
                        <AntDesign name="user" size={24} color="gray" />
                        <TextInput
                            placeholder='Name'
                            style={styles.textInput}
                            onChangeText={setName}
                            value={name}
                        />
                    </View>

                    <View style={styles.emailInput}>
                        <Feather name="mail" size={24} color="gray" />
                        <TextInput
                            placeholder='Email'
                            style={styles.textInput}
                            onChangeText={setEmail}
                            value={email}
                        />
                    </View>

                    <View style={styles.passwordInput}>
                        <FontAwesome name="lock" size={24} color="gray" />
                        <TextInput
                            placeholder='Password'
                            style={styles.textInput}

                            onChangeText={setPassword}
                            value={password}
                            secureTextEntry
                        />
                    </View>

                    <View style={styles.passwordInput}>
                        <FontAwesome name="lock" size={24} color="gray" />
                        <TextInput
                            placeholder='Confirm Password'
                            style={styles.textInput}

                            onChangeText={setConfirmPassword}
                            value={confirmPassword}
                            secureTextEntry
                        />
                    </View>


                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.buttonSignUp}
                        onPress={handleSignUp}
                    >
                        <Text
                            style={{ color: 'white', fontSize: Sizes.h2, padding: 6, fontWeight: 700, textAlign: 'center' }}
                        >Create Account</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection:'row',alignItems:'center', marginTop: 20,justifyContent:'center'}}>
                    <Text style={{ textAlign: 'center' ,fontSize: 18 ,fontStyle:'italic'}}>Already have an account? </Text>

                    <Pressable 
                        onPress={()=> navigation.navigate('SignIn')}
                    >
                        <Text style={{ color: Colors.primary, fontWeight: 700 ,fontSize:20}}>Sign In</Text>
                    </Pressable>
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

export default CreateAccountScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background
    },
    content: {
        flex: 1,
        marginTop: 20,
        alignItems: 'center',
    },
    text: {
        fontSize: Sizes.h1,
        fontWeight: 'bold',
        color: Colors.primary,
    },
    input: {
        marginTop: 10,
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
    phoneInput: {
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
    nameInput: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        justifyContent: 'center',
        width: '80%',
        marginBottom: 20,
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
    buttonContainer: {
        alignItems: 'center',
        marginTop: 30,
    },
    buttonSignUp: {
        alignItems: 'center',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        borderRadius: 10,
        backgroundColor: Colors.primary,
        marginTop: 30,
    },
})