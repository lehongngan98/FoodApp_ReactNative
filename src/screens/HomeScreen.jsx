import { StyleSheet, Text, View, SafeAreaView, Image, FlatList, Pressable, Dimensions } from 'react-native'
import React from 'react'
import HomeHeader from '../components/HomeHeader'
import { TouchableOpacity, ScrollView } from 'react-native';
import { useState } from 'react';
import { Colors } from '../global/style';
import { Icon } from '@rneui/themed';
import { filterData, restaurantsData } from '../global/data';
import { color } from '@rneui/base';
import FoodCard from '../components/FoodCard';

const SCREEN_WIDTH = Dimensions.get('window').width;

const HomeScreen = () => {
    const [delivery, setDelivery] = useState(true);
    const [indexCheck, setIndexCheck] = useState(0);

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

                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginTop: 10 }}>
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
                <View style={styles.headerTextView}>
                    <Text style={styles.headerText}>Categories</Text>

                </View>

                {/* list categories  */}
                <View >
                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={filterData}
                        keyExtractor={(item) => item.id}
                        extraData={indexCheck}
                        renderItem={({ item, index }) => (
                            <Pressable key={index}
                                onPress={()=>{setIndexCheck(item.id)}}
                            >
                                <View style={indexCheck === item.id ? styles.smallCardSelected : styles.smallCard}>
                                    <Image source={item.image} style={{ height: 70, width: 70 ,borderRadius:20,resizeMode:'cover'}} />
                                    <Text style={[ {fontWeight: 'bold',marginTop:10 }, indexCheck === item.id ? {color:'white'}:{color:'black'}]}>{item.name}</Text>
                                </View>
                            </Pressable>
                        )}
                    />
                </View>

                <View style={styles.headerTextView}>
                    <Text style={styles.headerText}>Free delivery now</Text>
                </View>

                <View>
                    <FlatList 
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={restaurantsData}
                        keyExtractor={(item,index) => index.toString()}
                        style={{marginTop:10,marginBottom:10}}
                        renderItem={({ item }) => (
                            <View>
                               <FoodCard 
                                // onPressFoodCard,
                                // restaurantName,
                                // deliveryAvailable,
                                // discountAvailable,
                                // discountPercent,
                                // nubmerOfReview,
                                // businessAddress,
                                // farAway,
                                // averageReview,
                                // images,
                                screenWidth = {SCREEN_WIDTH * 0.8}
                               
                               />
                            </View>
                        )}
                    />
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
    headerTextView: {
        backgroundColor: Colors.grey5,
        padding: 10,
        margin: 10,
        borderRadius: 10,
        marginTop: 20,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    smallCard: {
        borderRadius: 20,
        backgroundColor: Colors.grey5,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        width: 100,
        margin: 5,
        height: 120,
    },
    smallCardSelected: {
        borderRadius: 20,
        backgroundColor: Colors.buttons,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        width: 100,
        margin: 5,
        height: 120,
    }
})