import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors, Sizes } from '../../global/style'
import Swiper from 'react-native-swiper'


const WelcomeScreen = ({navigation}) => {

    
    return (
        <View style={styles.container}>


            <View style={{ flex: 2 }}>
                <Text style={{ fontSize: Sizes.h1, color: "#a21", fontWeight: '700', marginTop: 50, maxWidth: '80%', textAlign: 'center' }}>Welcome to Food Delivery App</Text>
            </View>
            <View style={{ flex: 4, justifyContent: 'center' }}>
                <Swiper
                    autoplayTimeout={2}
                    autoplay
                >
                    <View style={styles.slide1}>
                        <Image
                            source={{ uri: "https://i.postimg.cc/vDFqKTsF/mon-ngon-nhat-viet-nam-11430.jpg" }}
                            style={{ width: '100%', height: '100%' }}
                        />
                    </View>
                    <View style={styles.slide1}>
                        <Image
                            source={{ uri: "https://i.postimg.cc/RZRmc57V/banh-cuon-ba-hanh-mon-an-ngon-ha-noi-3.jpg" }}
                            style={{ width: '100%', height: '100%' }}
                        />
                    </View>
                    <View style={styles.slide1}>
                        <Image
                            source={{ uri: "https://i.postimg.cc/QN9jvz30/mon-an-vat-ngon-ct-12.jpg" }}
                            style={{ width: '100%', height: '100%' }}
                        />
                    </View>


                </Swiper>
            </View>
            <View style={{ flex: 3 ,width:'100%', alignItems:'center'}}>
                <TouchableOpacity style={styles.buttonSignin}
                    onPress={() => navigation.navigate('SignIn')}
                >
                    <Text
                        style={{ color: 'white', fontSize: Sizes.h2, padding: 6, fontWeight: 700, textAlign: 'center' }}
                    >Sign In</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonSignup}
                    onPress={() => {
                        navigation.navigate('SignUp')                        
                    }}
                >
                    <Text
                        style={{ color: 'black', fontSize: Sizes.h2, padding: 6, fontWeight: 700, textAlign: 'center' }}
                    >Create your account</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#aff'
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    buttonSignin: {
        alignItems: 'center',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: '70%',
        borderRadius: 10,
        backgroundColor: Colors.primary,
        marginTop: 50,
    },
    buttonSignup: {
        alignItems: 'center',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: '70%',
        borderRadius: 10,
        backgroundColor: Colors.cardBackground,
        marginTop: 20,
        borderColor:Colors.primary,
        borderWidth:0.5
    },
})