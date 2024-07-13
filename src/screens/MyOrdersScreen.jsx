import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const MyOrdersScreen = ({ route }) => {
    const { productName, price, image, productDetails, selectedDips, selectedDrinks, quantities } = route.params;

    useEffect(() => {
        console.log("MyOrdersScreen", quantities)

    })


    return (
        <View>
            <Text>MyOrdersScreen</Text>
        </View>
    )
}

export default MyOrdersScreen

const styles = StyleSheet.create({})