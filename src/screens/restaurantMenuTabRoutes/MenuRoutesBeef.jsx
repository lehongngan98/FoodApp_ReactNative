import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MenuCardProduct from '../../components/MenuCardProduct'
import { RestaurantMenuRoutesBeef } from '../../global/data'

const MenuRoutesBeef = () => {
    return (
        <View>
            <FlatList
                data={RestaurantMenuRoutesBeef}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <MenuCardProduct
                        productName={item.productName}
                        price={item.price}
                        image={item.image}
                        productDetails={item.productDetails}
                    />
                )}
            />
        </View>
    )
}

export default MenuRoutesBeef

const styles = StyleSheet.create({})