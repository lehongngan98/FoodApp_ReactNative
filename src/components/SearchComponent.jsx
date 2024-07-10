import { FlatList, Keyboard, Modal, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { Icon } from '@rneui/themed'
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../global/style';
import { filterData } from '../global/data';

const SearchComponent = () => {
    const [modalVisible, setModelVisible] = useState(false);
    const [textInputFocused, setTextInputFocused] = useState(true);
    const textInput = useRef(0);
    const navigation = useNavigation();
    const [data, setData] = useState([...filterData]);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        console.log("modalVisible :", modalVisible);
        console.log("textInputFossued :", textInputFocused);
        console.log("data :", data);
    }, [modalVisible, textInputFocused, data])


    const handleSearch = (text) => {
        setSearchText(text);
        if (text) {
            const newData = filterData.filter(item => item.name.toLowerCase().includes(text.toLowerCase()));
            setData(newData);
        } else {
            setData([...filterData]);
        }
    };

    return (
        <View>
            <TouchableWithoutFeedback style={styles.searchContainer}
                onPress={() => setModelVisible(true)}
            >
                <View style={styles.searchArea}>
                    <Icon
                        name='search'
                        style={styles.searchIcon}
                        type='material'
                        iconStyle={{ marginLeft: 5, color: 'gray' }}
                        size={28}
                    />
                    <Text style={{ fontSize: 15, color: 'gray', fontWeight: 500 }}>What are you looking for? </Text>
                </View>

            </TouchableWithoutFeedback>

            <Modal
                animationType='slide'
                transparent={false}
                visible={modalVisible}

            >
                <SafeAreaView style={styles.modal}>
                    <View style={styles.viewSeach}>
                        <View style={styles.textInput}>
                            <Animatable.View
                                animation={textInputFocused ? 'fadeInRight' : 'fadeInLeft'}
                                duration={400}
                            >
                                <Icon
                                    name={textInputFocused ? 'arrow-back' : 'search'}
                                    style={styles.searchIcon}
                                    type='material'
                                    iconStyle={{ marginLeft: 5, color: 'gray' }}
                                    size={28}
                                    onPress={() => {
                                        if (textInputFocused)
                                            setModelVisible(false)
                                        setTextInputFocused(true)
                                    }}
                                />
                            </Animatable.View>

                            <TextInput
                                placeholder='Search'
                                autoFocus={false}
                                value={searchText}
                                onChangeText={handleSearch}
                                ref={textInput}
                                style={{ width: '75%' }}
                                onFocus={() => setTextInputFocused(true)}
                                onBlur={() => setTextInputFocused(false)}
                            />

                            <Animatable.View
                                animation={textInputFocused ? 'fadeInLeft' : 'fadeInRight'}
                                duration={400}
                            >
                                <Icon
                                    name={textInputFocused ? 'cancel' : null}
                                    style={styles.searchIcon}
                                    type='material'
                                    iconStyle={{ marginLeft: 10, color: 'gray' }}
                                    size={28}
                                    onPress={() => {
                                        textInput.current.clear()
                                        handleSearch()
                                    }}
                                />
                            </Animatable.View>
                        </View>
                    </View>

                    <FlatList
                        data={data}
                        keyExtractor={item => item.id}
                        style={{width:'100%',marginTop:30}}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                onPress={() => {
                                    Keyboard.dismiss
                                    navigation.navigate("RestaurantSearchSreen", { item: item.name })
                                    setModelVisible(false)
                                    setTextInputFocused(true)
                                }}

                            >
                                <View style={styles.item}>
                                    <Text style={styles.itemName}>{item.name}</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                        
                    />

                </SafeAreaView>
            </Modal>
        </View>
    )
}

export default SearchComponent

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 0.1,
        borderColor: 'gray',
        borderRadius: 10,
        // đổ bóng
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,


    },
    searchArea: {
        flexDirection: 'row',
        padding: 5,
        alignItems: 'center',
        width: '90%'
    },
    searchIcon: {
        marginRight: 5,

    },
    modal: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    viewSeach: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 0.1,
        borderColor: 'gray',
        borderRadius: 10,
        // đổ bóng
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: '90%',

    },
    textInput: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        width: '100%',
        padding: 5,

    },
    item: {
        padding: 10,
        borderBottomWidth: 0.2,
        borderBottomColor: 'gray',
        marginLeft:20,        
        justifyContent: 'center',

    },
    itemName: {
        color: Colors.grey2,
        fontSize: 15
    },

})
