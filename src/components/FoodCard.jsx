import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '../global/style'
import { Icon } from '@rneui/themed'

const FoodCard = ({
    onPressFoodCard,
    restaurantName,
    deliveryAvailable,
    discountAvailable,
    discountPercent,
    nubmerOfReview,
    businessAddress,
    farAway,
    averageReview,
    images,
    screenWidth
}) => {
    return (
        <TouchableOpacity>
            <View style={{...styles.cardView,width:screenWidth}}>
                <Image 
                    style={{...styles.image,width:screenWidth}}
                    source={{uri:images}}
                />
            </View>

            <View>
                <Text style={styles.restaurantName}>{restaurantName}</Text>                
            </View>

            <View style={{flexDirection:'row',flex:1}}>
                <View style={styles.distance}>
                    <Icon 
                        name='place'
                        type='material'
                        color={Colors.grey2}
                        size={18}
                        iconStyle={{marginTop:3}}
                    />
                    <Text style={styles.farAway}>{farAway} km</Text>
                </View>

                <View style={{flex:9,flexDirection:'row'}}>
                    <Text style={styles.businessAddress}>{businessAddress}</Text>

                </View>

            </View>

            <View style={styles.review}>
                <Text style={styles.averageReview}>{averageReview}</Text>
                <Text>{nubmerOfReview} reviews</Text>
            </View>

        </TouchableOpacity>
    )
}

export default FoodCard

const styles = StyleSheet.create({
    cardView: {
        borderRadius: 20,
        backgroundColor: 'white',
        padding: 10,
        margin: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 5,
    },
    image: {
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        height:150,
    },
    restaurantName: {
        fontWeight: 'bold',
        fontSize: 17,
        color:Colors.grey1,
        marginTop: 5,
    },
    distance:{
        flex:4,
        flexDirection:'row',
        borderRightColor:Colors.grey4,
        paddingHorizontal:5,
        borderRightWidth:1,
    },
    farAway:{
        color:Colors.grey3,
        fontWeight:'bold',
        paddingTop:5,
        fontSize:12,
        // marginLeft:5,
    },
    businessAddress:{
        fontSize:12,
        paddingTop:5,
        color:Colors.grey2,
        paddingHorizontal:10,
    },
    review:{
        position:'absolute',
        top:0,
        right:10,
        backgroundColor:Colors.grey5,        
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        padding:2,
        borderBottomLeftRadius:12,
    },
    averageReview:{
        color:'white',
        fontWeight:'bold',
        fontSize:20,
        marginTop:-3,
    }
})