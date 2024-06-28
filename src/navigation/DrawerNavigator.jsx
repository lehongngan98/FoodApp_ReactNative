import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import RootClientTabs from './ClientTab';
import { Icon } from '@rneui/themed';
import { Colors } from '../global/style';
import BusinessConsoleScreen from '../screens/BusinessConsoleScreen';
import DrawerContent from '../components/DrawerContent';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
    return (
        <Drawer.Navigator
            drawerContent = {props => <DrawerContent {...props} />}
        >
            <Drawer.Screen
                name="RootClientTabs"
                component={RootClientTabs}
                options={{
                    title: 'Home',
                    headerShown: false,
                    drawerIcon: ({ focused, size }) => (
                        <Icon
                            name="home"
                            color={focused ? '#7cc' : Colors.grey2}
                            type="material-community"
                            size={size}
                        />
                    )
                }}
            />

            <Drawer.Screen
                name="BusinessConsoleScreen"
                component={BusinessConsoleScreen}
                options={{
                    title: 'Business console',
                    headerShown: false,
                    drawerIcon: ({ focused, size }) => (
                        <Icon
                            name="domain"
                            color={focused ? '#7cc' : Colors.grey2}
                            type="material-community"
                            size={size}
                        />
                    )
                }}
            />
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;
