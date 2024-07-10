import { Dimensions, FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import RestaurantSearchCard from '../components/RestaurantSearchCard';
import { restaurantsData } from '../global/data'
import { useNavigation } from '@react-navigation/native';

const SCREEN_WIDTH = Dimensions.get('window').width;

const RestaurantSearchSreen = ({ route }) => {


    return (
        <SafeAreaView style={styles.container}>
            
            <FlatList
                data={restaurantsData}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                renderItem={({ item ,index}) => (
                    <RestaurantSearchCard                        
                        restaurantName={item.restaurantName}
                        deliveryAvailable={true}
                        discountAvailable={true}
                        discountPercent={item.discount}
                        numberOfReview={item.numberOfReview}
                        businessAddress={item.businessAddress}
                        farAway={item.farAway}
                        averageReview={item.averageReview}
                        images={item.images}
                        productData={item.productData}
                        id={index}
                    />
                )}
                ListHeaderComponent={
                    <Text style={{fontSize:20,fontWeight:500,marginLeft:10,marginVertical:3}}>{restaurantsData.length} result {route.params.item}</Text>
                }
            />
        </SafeAreaView>
    )
}

export default RestaurantSearchSreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },

})
