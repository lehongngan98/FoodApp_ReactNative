import { Dimensions, FlatList, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import React from "react";
import SearchComponent from "../components/SearchComponent";
import { filterData } from "../global/data";
import { useNavigation } from '@react-navigation/native';


const SCREEN_WIDTH = Dimensions.get('window').width;



const SearchScreen = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={styles.container}>
            <SearchComponent />
            
            <View style={{marginBottom:50}}>
                <FlatList 
                    data={filterData}
                    ListHeaderComponent={<Text style={styles.listHeader}>Top Categories</Text>}
                    style={styles.flatListFood}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator ={false}
                    numColumns={2}
                    renderItem={({ item }) => (
                        <TouchableWithoutFeedback
                            onPress={() => {
                                navigation.navigate("RestaurantSearchSreen", { item: item.name })                            
                            }}
                        >
                            <View>
                                <ImageBackground 
                                    source={ item.image }
                                    style={styles.imageFood}
                                />
                            </View>
                        </TouchableWithoutFeedback>
                    )}
                />
            </View>
        </SafeAreaView>
    );
};

export default SearchScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "white",
        alignItems: "center",
        // justifyContent: "center",
    },
    flatListFood: {
        width: "100%",
        marginTop: 30,
        
    },
    imageFood: {
        width: SCREEN_WIDTH * 0.4375,
        height: SCREEN_WIDTH * 0.4375,
        borderRadius: 10,
        margin:5
    },
    listHeader: {
        fontSize: 20,
        fontWeight: "bold",
        // marginHorizontal: 20,
        marginBottom: 10,
    },
});
