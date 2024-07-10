import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Avatar, Icon, Switch } from '@rneui/themed';
import { Colors } from '../global/style';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../../firebaseConfig.js'; // Updated import

const DrawerContent = (props) => {
    const navigation = useNavigation();

    // const handleLogOut = async () => {
    //     try {
    //         await signOut(auth);
    //         console.log("User signed out successfully");
    //         navigation.reset({ index: 0, routes: [{ name: 'SignIn' }] });
    //     } catch (error) {
    //         console.error("Error signing out: ", error);
    //     }
    // };


    return (
        <View style={styles.container}>
            <DrawerContentScrollView {...props}>
                <View style={styles.content}>
                    <Avatar
                        size={80}
                        avatarStyle={styles.avatar}
                        source={{ uri: 'https://upanh123.com/wp-content/uploads/2020/12/avatar-nam.jpg' }}
                    />
                    <View style={styles.information}>
                        <Text style={{ maxWidth: 200, fontSize: 16, fontWeight: 500 }}>Le Hong Ngan</Text>
                        <Text style={{ maxWidth: 200, fontSize: 14 }}>lehongngan@gmail.com</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingBottom: 10, borderBottomColor: Colors.grey4, borderBottomWidth: 1, backgroundColor: Colors.buttons }}>
                    <View style={{ alignItems: 'center', gap: 4 }}>
                        <Text style={styles.number}>1</Text>
                        <Text style={styles.textContent}>My favorites</Text>
                    </View>
                    <View style={{ alignItems: 'center', gap: 4 }}>
                        <Text style={styles.number}>1</Text>
                        <Text style={styles.textContent}>My cards</Text>
                    </View>
                </View>

                <DrawerItemList {...props} />

                <DrawerItem
                    label={"Settings"}
                    icon={({ color, size }) => (
                        <Icon
                            name='cog-outline'
                            color={color}
                            type='material-community'
                            size={size}
                        />
                    )}
                />

                <DrawerItem
                    label={"Help"}
                    icon={({ color, size }) => (
                        <Icon
                            name='web'
                            color={color}
                            type='material-community'
                            size={size}
                        />
                    )}
                />

                <View style={{ borderTopWidth: 1, borderTopColor: Colors.grey4 }}>
                    <Text style={styles.preference}>Preferences</Text>
                    <View style={styles.switchText}>
                        <Text style={styles.darkTheme}>Dark theme</Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                            thumbColor={"#f5f3f4"}
                            ios_backgroundColor="#3e3e3e"
                        // onValueChange={toggleSwitch}
                        // value={isEnabled}
                        />
                    </View>
                </View>
            </DrawerContentScrollView>

            <DrawerItem
                label={"Log out"}
                icon={({ color, size }) => (
                    <Icon
                        name='logout-variant'
                        color={color}
                        type='material-community'
                        size={size}
                    />
                )}
                style={{ marginBottom: 30 }}
                // onPress={handleLogOut}
            />
        </View>
    );
}

export default DrawerContent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background
    },
    content: {
        width: '100%',
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: Colors.buttons
    },
    avatar: {
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 50,
        resizeMode: 'cover',
    },
    information: {
        marginLeft: 10,
        gap: 4,
    },
    number: {
        color: 'white',
        fontSize: 18,
        fontWeight: 700
    },
    textContent: {
        color: 'white',
        fontSize: 14,
        fontWeight: 700
    },
    preference: {
        marginLeft: 20,
        marginTop: 10,
        fontSize: 16,
        color: Colors.grey1,
        fontStyle: 'italic',
    },
    switchText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 20,
        marginTop: 10,
    },
    darkTheme: {
        fontSize: 16,
        fontWeight: 800,
    },
});
