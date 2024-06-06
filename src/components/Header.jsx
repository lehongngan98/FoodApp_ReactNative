import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, Parameters, Sizes } from '../global/style'
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';




const Header = ({ title , type }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Icon
                type='material-community'
                name={type}
                color={Colors.headerText}
                size={28}
                style={styles.icon}
                onPress={()=>
                    navigation.goBack()
                }
            />
            <View style={styles.title}>
                <Text style={styles.titleText}>{title}</Text>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: Colors.buttons,
        height: Parameters.headerHeight,
        alignItems: 'center',

    },
    icon: {
        margin: 10,
    },
    title: {
        flex: 1,
    },
    titleText: {
        color: Colors.headerText,
        fontSize: Sizes.h2,
        fontWeight: 'bold',
    }

})