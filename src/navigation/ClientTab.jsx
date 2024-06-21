import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import { Icon } from '@rneui/themed';
import { Colors } from '../global/style';
import SearchScreen from '../screens/SearchScreen';
import MyOrdersScreen from '../screens/MyOrdersScreen';
import MyAccountScreen from '../screens/MyAccountScreen';

const Tab = createBottomTabNavigator();

function RootClientTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: Colors.buttons, 
                tabBarInactiveTintColor: 'black',
                tabBarStyle: {
                    backgroundColor: 'white',
                    borderTopWidth: 0,
                    shadowOffset: { width: 5, height: 3 },
                    shadowColor: 'black',
                    shadowOpacity: 0.5,
                    elevation: 5,
                },
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options ={
                    {
                        title: 'Home',
                        headerShown:false,
                        tabBarIcon: ({color,size}) => (
                            <Icon 
                                name='home'
                                color={color}
                                type='material'
                                size={size}
                            />
                        )
                        
                    }
                }
            />
            <Tab.Screen
                name="Search"
                component={SearchScreen}
                options ={
                    {
                        title: 'Search',
                        headerShown:false,
                        tabBarIcon: ({color,size}) => (
                            <Icon 
                                name='search'
                                color={color}
                                type='material'
                                size={size}
                            />
                        )
                    }
                }
            />
            <Tab.Screen
                name="MyOrdersScreen"
                component={MyOrdersScreen}
                options ={
                    {
                        title: 'My orders',
                        headerShown:false,
                        tabBarIcon: ({color,size}) => (
                            <Icon 
                                name='view-list'
                                color={color}
                                type='material'
                                size={size}
                            />
                        )
                    }
                }
            />
            <Tab.Screen
                name="MyAccount"
                component={MyAccountScreen}
                options ={
                    {
                        title: 'Account',
                        headerShown:false,
                        tabBarIcon: ({color,size}) => (
                            <Icon 
                                name='person'
                                color={color}
                                type='material'
                                size={size}
                            />
                        )
                    }
                }
            />

        </Tab.Navigator>
    );
}
export default RootClientTabs;