import React, { useEffect, useState } from 'react';
import { Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import RestaurantHeaderComponent from '../components/RestaurantHeaderComponent';
import { RoutesModalMenu, restaurantsData } from '../global/data';
import { Colors } from '../global/style';
import MenuTabView from './restaurantTab/MenuTabView';
import InfoTabView from './restaurantTab/InfoTabView';
import ReviewsTabView from './restaurantTab/ReviewsTabView';
import { Icon } from '@rneui/themed';
import { color } from '@rneui/base';
import MenuRoutesBeef from './restaurantMenuTabRoutes/MenuRoutesBeef';


const RestaurantHomeScreen = ({ navigation, route }) => {
    const { id } = route.params;

    const initialLayout = { width: Dimensions.get('window').width };

    const [index, setIndex] = useState(0);

    const [indexModalMenu, setIndexModalMenu] = useState(0);

    const [modalVisible, setModalVisible] = useState(false)

    const [routes] = useState([
        { key: 'menu', title: 'MENU' },
        { key: 'info', title: 'INFO' },
        { key: 'reviews', title: 'REVIEWS' },
    ]);

    const [routesModalMenu] = useState([
        { key: 'beef', title: 'BEEF' },
        { key: 'chicken', title: 'CHICKEN' },
        { key: 'veggieBurger', title: 'VEGGIE BURGER' },
        { key: 'friesCorn', title: 'FRIES & CORN' },
        { key: 'salads', title: 'SALADS' },
        { key: 'happyMeals', title: 'HAPPY MEALS' },
        { key: 'shareBox', title: 'SHARE BOX' },
        { key: 'milkshakes', title: 'MILKSHAKES' },
        { key: 'coldDrinks', title: 'COLD DRINKS' },
        { key: 'desserts', title: 'DESSERTS' },
        { key: 'hotDrinks', title: 'HOT DRINKS' }
    ]);



    const renderScene = () => {
        return (
            <View>

            </View>
        )
    }

    const renderModalScene = SceneMap({
        beef: () => <MenuRoutesBeef setModalVisible={setModalVisible}/>,
        chicken: () => <Text>Chicken</Text>,
        veggieBurger: () => <Text>Veggie Burger</Text>,
        friesCorn: () => <Text>Fries & Corn</Text>,
        salads: () => <Text>Salads</Text>,
        happyMeals: () => <Text>Happy Meals</Text>,
        shareBox: () => <Text>Share Box</Text>,
        milkshakes: () => <Text>Milkshakes</Text>,
        coldDrinks: () => <Text>Cold Drinks</Text>,
        desserts: () => <Text>Desserts</Text>,
        hotDrinks: () => <Text>Hot Drinks</Text>,
    });


    const renderTabBar = props => (
        <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: 'gray' }}
            style={{ backgroundColor: Colors.buttons }}
            activeColor={'black'}
            inactiveColor='white'
            tabStyle={styles.tabStyle}
            scrollEnabled={true}
            labelStyle={styles.labelStyle}
        />

    );

    const renderMenuTabBar = props => (
        <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: 'gray' }}
            style={{ backgroundColor: Colors.buttons }}
            activeColor={'black'}
            inactiveColor='white'
            tabStyle={styles.tabMenuStyle}
            scrollEnabled={true}
            labelStyle={styles.labelStyle}
        />
    );

    const menuPressed = () => {
        setModalVisible(true);
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {/* RestaurantHeaderComponent */}
                <RestaurantHeaderComponent id={id} />


                {restaurantsData[id].discount && (
                    <View>
                        <Text style={styles.discountText}>
                            Get {restaurantsData[id].discount}% OFF ON FOOD TOTAL
                        </Text>
                    </View>
                )}

                {/* infomation restaurant */}
                <View style={styles.infomationRestaurant}>
                    <View style={styles.infomationRestaurantLeft}>
                        <Text style={styles.restaurantName}>{restaurantsData[id].restaurantName}</Text>
                        <Text style={styles.foodType}>{restaurantsData[id].foodType}</Text>

                        <View style={styles.reviewDistanceContainer}>
                            <View style={styles.reviewContainer}>
                                <FontAwesome name="star" size={20} color="gray" />
                                <Text style={styles.averageReview}>{restaurantsData[id].averageReview}</Text>
                                <Text style={styles.reviewCount}>({restaurantsData[id].numberOfReview})</Text>
                            </View>

                            <View style={styles.distanceContainer}>
                                <MaterialIcons name="place" size={20} color="gray" />
                                <Text style={styles.distanceText}>{restaurantsData[id].farAway} km</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.infomationRestaurantRight}>
                        <View style={styles.deliveryInfoContainer}>
                            <Text style={styles.deliveryText}>Delivery</Text>
                            <View style={styles.deliveryTimeContainer}>
                                <Text style={styles.deliveryTime}>{restaurantsData[id].deliveryTime}</Text>
                                <Text style={styles.deliveryTimeUnit}>min</Text>
                            </View>
                        </View>
                    </View>
                </View>


                {/* component tab view */}
                <View style={styles.tabView}>
                    <TabView
                        navigationState={{ index, routes }}
                        // renderScene={renderScene}
                        renderScene={renderScene}
                        onIndexChange={setIndex}
                        initialLayout={initialLayout}

                        renderTabBar={renderTabBar}
                    />

                    {/* renderScene tabview*/}
                    {
                        index === 0 && <MenuTabView onPress={menuPressed} />
                    }

                    {
                        index === 1 && <InfoTabView />
                    }

                    {
                        index === 2 && <ReviewsTabView />
                    }


                </View>
            </ScrollView>

            {/* view card */}
            <TouchableOpacity style={styles.viewCardContainer}>
                <View style={styles.viewCard}>
                    <Text style={styles.textViewCard}>View Card</Text>

                    <View style={styles.total}>
                        <Text style={styles.textTotal}>$0.00</Text>
                    </View>
                </View>
            </TouchableOpacity>





            {/* modal */}
            <Modal
                animationType="slide"
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}

            >
                <SafeAreaView style={styles.modalContainer}>
                    {/* icon go back */}
                    <Icon
                        name='arrow-left'
                        type='material-community'
                        color='black'
                        size={25}
                        onPress={() => setModalVisible(false)}
                    />
                    <Text style={styles.titleHeaderModal}>Menu</Text>
                </SafeAreaView>

                <TabView
                    navigationState={{ index: indexModalMenu, routes: routesModalMenu }}
                    renderScene={renderModalScene}
                    onIndexChange={setIndexModalMenu}
                    initialLayout={initialLayout}
                    renderTabBar={renderMenuTabBar}
                />

                

            </Modal>
        </SafeAreaView>
    );
};

export default RestaurantHomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    discountText: {
        textAlign: 'center',
        fontSize: 16,
        color: 'green',
        fontWeight: '700',
    },
    infomationRestaurant: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        alignItems: 'center',
    },
    infomationRestaurantLeft: {
        gap: 5,
    },
    infomationRestaurantRight: {
        gap: 5,
    },
    restaurantName: {
        fontSize: 20,
        fontWeight: '700',
    },
    foodType: {
        fontSize: 16,
        fontWeight: '500',
    },
    reviewDistanceContainer: {
        flexDirection: 'row',
        gap: 10,
    },
    reviewContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 2,
    },
    averageReview: {
        fontSize: 16,
        fontWeight: '700',
        color: 'gray',
    },
    reviewCount: {
        color: 'gray',
    },
    distanceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 2,
    },
    distanceText: {
        color: 'gray',
    },
    deliveryInfoContainer: {
        alignItems: 'center',
        gap: 4,
    },
    deliveryText: {
        fontSize: 16,
        fontWeight: '700',
    },
    deliveryTimeContainer: {
        width: 50,
        height: 50,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.buttons,
    },
    deliveryTime: {
        color: 'white',
        fontSize: 20,
        fontWeight: '700',
    },
    deliveryTimeUnit: {
        color: 'white',
        fontSize: 16,
        fontWeight: '700',
    },
    tabView: {
        marginBottom: 45,
    },
    tabStyle: {


    },
    labelStyle: {
        fontSize: 16,
        fontWeight: '700',
    },
    contentContainerStyle: {
        padding: 0,
    },

    viewCardContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        alignItems: 'center',

    },
    viewCard: {
        width: '100%',
        paddingHorizontal: 20,
        height: 50,
        flexDirection: 'row',
        backgroundColor: Colors.buttons,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    textViewCard: {
        color: 'white',
        fontSize: 16,
        fontWeight: '700',
    },
    total: {
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 10,
    },
    textTotal: {
        color: 'black',
        fontSize: 16,
        fontWeight: '700',
    },
    modalContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginHorizontal: 10,
        height: 90,
        gap: 10,
    },
    titleHeaderModal: {
        fontSize: 20,
        fontWeight: '700',
        marginLeft: 10,
    },
    tabMenuStyle: {
        width: 'auto',
       alignItems:'center',
        marginRight:10, 

    }

});
