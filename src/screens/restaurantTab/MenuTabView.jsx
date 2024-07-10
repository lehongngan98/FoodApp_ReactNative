import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { menuData, specialData } from '../../global/data'
import { useNavigation } from '@react-navigation/native'
import { Icon } from '@rneui/themed'

const MenuTabView = ({ restaurant ,onPress}) => {

    const navigation = useNavigation();

    const handlePress = () => {
        // navigation.navigate("ProductSpec")
    }
    return (
        <View style={styles.container}>
            <View>
                {
                    specialData.map((items) => (
                        <View key={items.key} style={styles.listSpecial}>
                            <TouchableOpacity onPress={onPress}>
                                <View style={styles.content}>
                                    <Icon name='star' type='material-community' color='gold'/>
                                    <Text style={styles.textTitle}>{items.title}</Text>
                                </View>

                            </TouchableOpacity>

                        </View>
                    ))
                }
            </View>

            <View>
                {
                    menuData.map((items) => (
                        <View key={items.key} style={styles.listSpecial}>
                            <TouchableOpacity onPress={onPress}>
                                <View style={styles.content}>
                                    {/* <Icon name='star' type='material-community' color='gold'/> */}
                                    <Text style={styles.textTitle}>{items.title}</Text>
                                </View>

                            </TouchableOpacity>

                        </View>
                    ))
                }
            </View>

        </View>
    )
}

export default MenuTabView

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: 'white'
    },
    listSpecial: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0'
    },
    content: {
        flexDirection: 'row',        
        alignItems: 'center',
        width: '100%',
        gap:10
    },
    textTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color:'gray',

    }
})
