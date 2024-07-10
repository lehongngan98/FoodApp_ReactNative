import { Dimensions, FlatList, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import FoodCard from './FoodCard';
import { Colors } from '../global/style';
import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/themed';


const SCREEN_WIDTH = Dimensions.get('window').width;

const RestaurantSearchCard = ({
    restaurantName,
    deliveryAvailable,
    discountAvailable,
    discountPercent,
    numberOfReview,
    businessAddress,
    farAway,
    averageReview,
    images,
    productData,
    id
}) => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.cardContainer}
                onPress={() => { navigation.navigate("RestaurantHomeScreen",{id:id , restaurantName:restaurantName}) }}
            >
                <View style={{ ...styles.cardView, width: SCREEN_WIDTH * 0.9 }}>
                    <Image
                        style={{ ...styles.image, width: SCREEN_WIDTH * 0.9 }}
                        source={{ uri: images }}
                    />
                </View>

                <View style={{ marginLeft: 10 }}>
                    <Text style={styles.restaurantName}>{restaurantName}</Text>
                </View>

                <View style={{ flexDirection: 'row', flex: 1 }}>
                    <View style={styles.distance}>
                        <Icon
                            name='place'
                            type='material'
                            color={Colors.grey2}
                            size={18}
                            iconStyle={{ marginTop: 3 }}
                        />
                        <Text style={styles.farAway}>{farAway} km</Text>
                    </View>

                    <View style={{ flex: 9, flexDirection: 'row', marginLeft: 10 }}>
                        <Text style={styles.businessAddress}>{businessAddress}</Text>
                    </View>
                </View>

                <View style={styles.review}>
                    <Text style={styles.averageReview}>{averageReview}</Text>
                    <Text>{numberOfReview} reviews</Text>
                </View>
            </TouchableOpacity>

            <FlatList
                data={productData}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                keyExtractor={(item) => item.productId.toString()}
                style={{ top: -5 }}
                renderItem={({ item }) => (
                    <View style={styles.view2}>
                        <View>
                            <ImageBackground
                                style={styles.imageProduct}
                                source={{ uri: item.image }}
                                imageStyle={styles.imageStyle}
                            />
                        </View>
                        <View style={{ marginLeft: 5, justifyContent: 'center', gap: 10, width: 100 }}>
                            <Text style={styles.textProductName}>{item.productName}</Text>
                            <Text style={styles.textPrice}>R{item.price}</Text>
                        </View>
                    </View>
                )}
            />

            <View style={{ borderBottomWidth: 1, borderBottomColor: Colors.grey4, margin: 20 }}></View>
        </View>
    );
};

export default RestaurantSearchCard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems:'center',
    },
    cardContainer:{
        marginLeft:2,
        backgroundColor:'white',
        height:270,
        borderWidth:0.5,
        borderColor:Colors.grey4,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        // Adding shadow properties
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5, // for Android shadow

    },
    view2: {
        height: 110,
        backgroundColor: Colors.grey5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 10,
        borderBottomWidth: 2,
        borderLeftWidth: 1,
        borderBottomColor: Colors.grey4,
        borderLeftColor: Colors.grey4,
        borderBottomLeftRadius: 10,
        paddingLeft: 5,
        // Adding shadow properties
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5, // for Android shadow
    },
    image: {
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        height: 150,
        resizeMode: 'contain',
    },
    imageProduct: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    imageStyle: {
        borderRadius: 10,
    },
    textAverageReview: {
        color: Colors.white,
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10,
    },
    textNumberOfReview: {
        color: Colors.white,
        fontSize: 15,
        margin: 10,
    },
    textProductName: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    textPrice: {
        fontSize: 15,
        color: Colors.grey1,
    },
    cardView: {
        borderRadius: 20,
        backgroundColor: 'white',
        alignItems:'center',
        padding: 10,
        margin: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 5,
    },
    restaurantName: {
        fontWeight: 'bold',
        fontSize: 17,
        color: Colors.grey1,
        marginTop: 5,
    },
    distance: {
        flex: 4,
        flexDirection: 'row',
        borderRightColor: Colors.grey4,
        paddingHorizontal: 5,
        borderRightWidth: 1,
    },
    farAway: {
        color: Colors.grey3,
        fontWeight: 'bold',
        paddingTop: 5,
        fontSize: 12,
    },
    businessAddress: {
        fontSize: 12,
        paddingTop: 5,
        color: Colors.grey2,
        paddingHorizontal: 10,
    },
    review: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: Colors.grey5,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 2,
        borderBottomLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    averageReview: {
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: -3,
    },
});
