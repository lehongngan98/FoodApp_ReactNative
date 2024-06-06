import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, Parameters } from '../global/style'
import { Icon ,withBadge} from '@rneui/themed';


const HomeHeader = () => {
    const BadgeIcon = withBadge(0)(Icon);
    return (
        <View style={styles.container}>
            <View style={styles.menu}>
                <Icon 
                    type='material-community'
                    name='menu'
                    color={Colors.headerText}
                    size={28}
                />
            </View>

            <View style={styles.title}>
                <Text style={styles.titleText}>FoodApp</Text>
            </View>

            <View style={styles.cart}>
                <BadgeIcon 
                    type='material-community'
                    name='cart'
                    color={Colors.headerText}
                    size={28}
                />
            </View>
        </View>
    )
}

export default HomeHeader

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: Colors.buttons,
        height: Parameters.headerHeight,
        alignItems: 'center',
        justifyContent:'space-between'
    },
    menu:{
        alignItems:'center',
        justifyContent:'center',
        marginLeft:15,
    },
    title: {
        alignItems:'center',
        justifyContent:'center',
    },
    titleText: {
        color: Colors.headerText,
        fontSize: 20,
        fontWeight: 'bold',
    },
    cart:{
        alignItems:'center',
        justifyContent:'center',
        marginRight:15,
    }
})