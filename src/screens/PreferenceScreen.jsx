import { Alert, Button, Dimensions, FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { CheckBox, Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../global/style';
import { Dips, Drinks } from '../global/data';
import { EvilIcons, AntDesign } from '@expo/vector-icons';


const PreferenceScreen = ({ route }) => {
    const { productName, price, image, productDetails } = route.params;

    const [priceCard, setPriceCard] = useState(price); // Initialize as null initially


    const navigation = useNavigation();

    const [selectedDips, setSelectedDips] = useState([]);

    const [selectedDrinks, setSelectedDrinks] = useState([]);

    const [quantities, setQuantities] = useState(1);





    const toggleDipSelection = (dipId) => {
        const selectedDip = Dips.find(dip => dip.id === dipId);
        if (selectedDips.includes(dipId)) {
            setSelectedDips(selectedDips.filter(id => id !== dipId));
            setPriceCard(priceCard - selectedDip.price);
        } else {
            setSelectedDips([...selectedDips, dipId]);
            setPriceCard(priceCard + selectedDip.price);
        }
    };

    const toggleDrinkSelection = (drinkId) => {
        const selectedDrink = Drinks.find(drink => drink.id === drinkId);
        if (selectedDrinks.includes(drinkId)) {
            setSelectedDrinks(selectedDrinks.filter(id => id !== drinkId));
            setPriceCard(priceCard - selectedDrink.price);
        } else {
            setSelectedDrinks([...selectedDrinks, drinkId]);
            setPriceCard(priceCard + selectedDrink.price);
        }
    };


    useEffect(() => {
        console.log("selectedDips :", selectedDips);
        console.log("selectedDrinks :", selectedDrinks);
    }, [selectedDips, selectedDrinks])


    const formatPrice = (price) => {
        return price.toFixed(1);
    }


    const incrementQuantity = () => {
        setQuantities(prevQuantities => {
            const newQuantities = prevQuantities + 1;
            setPriceCard(formatPrice(price * newQuantities));
            return newQuantities;
        });
    }

    const decrementQuantity = () => {
        setQuantities(prevQuantities => {
            if (prevQuantities > 1) { // Prevent quantity from going below 1
                const newQuantities = prevQuantities - 1;
                setPriceCard(formatPrice(price * newQuantities));
                return newQuantities;
            }
            return prevQuantities;
        });
    }


    const handleAddCard = () => {
        // thong bao thanh cong, bam ok roi moi quay ve home

        Alert.alert(
            "Add to card success",
            "Do you want to go to My Orders ?",
            [                
                {
                    text: "No",
                    onPress: () => console.log("No")
                },
                {
                    text: "Yes",
                    onPress: () => navigation.navigate('MyOrdersScreen',
                        {
                            productName: productName,
                            price: priceCard,
                            image: image,
                            productDetails: productDetails,
                            selectedDips: selectedDips,
                            selectedDrinks: selectedDrinks,
                            quantities: quantities
                        }
                    )
                }
            ])
    }




    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View>
                    <Image
                        source={{ uri: image }}
                        style={styles.image}
                    />
                    <Text style={styles.textProductName}>{productName}</Text>
                    <Text style={styles.textProductDetails}>{productDetails}</Text>

                    <View style={styles.iconGoBack}>
                        <Icon
                            name='arrow-left'
                            size={30}
                            color='black'
                            onPress={() => navigation.goBack()}
                            type='material-community'
                        />
                    </View>
                </View>

                {/* container checkbox dips */}
                <View style={styles.containerCheckDips}>
                    <Text style={styles.textCheckDips}>Choose your dips</Text>
                    <View style={styles.checkDips}>
                        {
                            Dips.map((dip) => (
                                <View key={dip.id} style={styles.dip}>
                                    {/* checkbox */}
                                    <CheckBox
                                        checked={selectedDips.includes(dip.id)}
                                        onPress={() => toggleDipSelection(dip.id)}
                                    />

                                    <View style={styles.textCheckBox}>
                                        <Text style={styles.textNameCheckBox}>{dip.name}</Text>
                                        <Text style={styles.textPriceCheckbox}>${dip.price}</Text>
                                    </View>
                                </View>
                            ))
                        }
                    </View>

                    {/* container choose drink */}
                    <View style={styles.containerCheckDrink}>
                        <Text style={styles.textCheckDips}>Choose your drink</Text>
                        <View style={styles.checkDips}>
                            {
                                Drinks.map((drink) => (
                                    <View key={drink.id} style={styles.dip}>
                                        {/* checkbox */}
                                        <CheckBox
                                            checked={selectedDrinks.includes(drink.id)}
                                            onPress={() => toggleDrinkSelection(drink.id)}
                                        />

                                        <View style={styles.textCheckBox}>
                                            <Text style={styles.textNameCheckBox}>{drink.name}</Text>
                                            <Text style={styles.textPriceCheckbox}>${drink.price}</Text>
                                        </View>
                                    </View>
                                ))
                            }
                        </View>
                    </View>



                </View>
            </ScrollView>

            {/* container selected quantity */}
            <View style={styles.quantityContainer}>
                <View style={{ alignItems: 'flex-start', width: '100%', marginBottom: 5 }}>
                    <Text style={{ fontSize: 18, fontWeight: '500' }}>Quantity :</Text>
                </View>
                <View style={styles.selectedQuantity}>
                    <AntDesign
                        name="minuscircle"
                        size={26}
                        color="tomato"
                        onPress={() => decrementQuantity()}
                    />

                    <Text style={styles.quantityText}>{quantities}</Text>

                    <AntDesign
                        name="pluscircle"
                        size={26}
                        color="green"
                        onPress={() => incrementQuantity()}
                    />
                </View>

                <TouchableOpacity style={styles.buttonAddCard}
                    onPress={handleAddCard}
                >
                    <Text style={styles.buttonAddCardText}>
                        Add {quantities} to Card $
                    </Text>

                    <Text style={{ ...styles.buttonAddCardText, color: 'red' }}>{priceCard}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default PreferenceScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    image: {
        width: '100%',
        height: 200
    },
    textProductName: {
        fontSize: 20,
        fontWeight: '500',
        marginVertical: 5,
        marginHorizontal: 10
    },
    iconGoBack: {
        position: 'absolute',
        top: 10,
        left: 10,
        padding: 3,
        backgroundColor: 'white',
        borderRadius: 50,
        borderWidth: 1,
    },
    textProductDetails: {
        fontSize: 16,
        marginBottom: 5,
        marginHorizontal: 10,
        color: Colors.grey1,
    },
    containerCheckDips: {
        marginHorizontal: 10,
        marginVertical: 10,
    },
    textCheckDips: {
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 5,
        backgroundColor: Colors.grey5,
        padding: 5,
    },
    checkDips: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    dip: {
        flexDirection: 'row',
        alignItems: 'center',

        marginBottom: 10,
        paddingHorizontal: 5,
        borderBottomColor: Colors.grey5,
        borderBottomWidth: 1,
    },
    textCheckBox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
        width: '75%',
        justifyContent: 'space-between',
    },
    textNameCheckBox: {
        fontSize: 16,
    },
    textPriceCheckbox: {
        fontSize: 16,
        color: Colors.grey1,
    },
    containerCheckDrink: {
        marginVertical: 10,
    },
    textCheckDips: {
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 5,
        backgroundColor: Colors.grey5,
        padding: 5,
    },
    checkDips: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    quantityContainer: {
        // flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
        marginHorizontal: 10,
        borderTopColor: Colors.grey5,
        borderTopWidth: 1,
    },
    quantityText: {
        fontSize: 20,
        fontWeight: '500',
    },
    selectedQuantity: {
        flexDirection: 'row',
        width: Dimensions.get('window').width,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    buttonAddCard: {
        padding: 10,
        width: Dimensions.get('window').width * 0.8,
        backgroundColor: Colors.grey5,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        flexDirection: 'row',

    },
    buttonAddCardText: {
        fontSize: 16,
        fontWeight: '700'
    }


})