import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import HomeHeader from '../components/HomeHeader'
import { TouchableOpacity, ScrollView } from 'react-native';
import { useState } from 'react';
import { Colors } from '../global/style';
import { Icon } from '@rneui/themed';

const HomeScreen = () => {
    const [delivery, setDelivery] = useState(true);

    return (
        <SafeAreaView styles={styles.container}>
            <HomeHeader />

            <ScrollView
                stickyHeaderIndices={[0]}
                showsVerticalScrollIndicator={true}
            >
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
                        {/* button delivery */}
                        <TouchableOpacity
                            style={{ ...styles.deliveryButton, backgroundColor: delivery ? Colors.buttons : Colors.grey5, }}
                            onPress={() => { setDelivery(true) }}
                        >
                            <Text style={[styles.buttonText, { color: delivery ? Colors.headerText : 'black' }]}>Dilivery</Text>
                        </TouchableOpacity>

                        {/* button pick up */}
                        <TouchableOpacity
                            style={{ ...styles.deliveryButton, backgroundColor: delivery ? Colors.grey5 : Colors.buttons, }}
                            onPress={() => { setDelivery(false) }}
                        >
                            <Text style={[styles.buttonText, { color: delivery ? 'black' : Colors.headerText }]}>Pick up</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginTop: 10}}>
                    {/* location */}
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            gap: 10,
                            backgroundColor: Colors.grey4,
                            width: '70%',
                            alignSelf: 'center',
                            borderRadius: 20,
                            padding: 5,

                        }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Icon
                                type='material-community'
                                name='map-marker'
                                color={'black'}
                                size={25}

                            />
                            <Text style={{ fontSize: 14, marginLeft: 1 }}>168 đường số 1</Text>
                        </View>

                        {/* icon clock */}
                        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: Colors.grey5, borderRadius: 20, paddingHorizontal: 10, paddingVertical: 2 }}>
                            <Icon
                                type='material-community'
                                name='clock-time-four'
                                color={'black'}
                                size={25}

                            />
                            <Text style={{ fontSize: 14, marginLeft: 1 }}>now</Text>
                        </View>
                    </View>

                    {/* icon tune */}
                    <View>
                        <Icon
                            type='material-community'
                            name='tune'
                            color={'black'}
                            size={25}

                        />
                    </View>
                </View>

                {/* categories */}
                <View style={styles.categories}>
                    <Text style={styles.categoriesText}>Categories</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    deliveryButton: {
        width: 150,
        padding: 10,
        borderRadius: 10,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',

    },
    categories: {
        backgroundColor: Colors.grey5,
        padding: 10,
        margin: 10,
        borderRadius: 10,
        marginTop:20,
    },
    categoriesText:{
        fontSize: 20,
        fontWeight: 'bold',
    }
})