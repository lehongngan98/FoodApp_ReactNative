import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const MenuCardProduct = ({ productName, price, image, productDetails }) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity

            onPress={()=>navigation.navigate('')} // navigation product detail
            style={styles.container}
        >
            <View style={styles.infoContainer}>
                <Text style={styles.textProductName}>{productName}</Text>
                <Text style={styles.textProductDetails}>{productDetails}</Text>
                <Text style={styles.textPrice}>{price}</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image source={{ uri: image }} style={styles.image} />
            </View>
        </TouchableOpacity>
    )
}

export default MenuCardProduct

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: 'white',
        marginHorizontal:10,
        marginVertical: 5,
        borderRadius: 10,

        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.26,
        shadowRadius: 8,
        elevation: 5

    },
    infoContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10
    },
    textProductName: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    textProductDetails: {
        fontSize: 16
    },
    textPrice: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})