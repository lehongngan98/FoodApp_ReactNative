import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrawerNavigator from "./DrawerNavigator";
import RestaurantsMapScreen from "../screens/RestaurantsMapScreen";

const Stack = createNativeStackNavigator();

function AppStack() {
    return (
        
            <Stack.Navigator >
                <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} options={{ headerShown: false }} />
                <Stack.Screen name="RestaurantsMapScreen" component={RestaurantsMapScreen} options={{ headerShown: true }} />
            </Stack.Navigator>
        
    );
}

export default AppStack;