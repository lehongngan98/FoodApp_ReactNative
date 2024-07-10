import { Dimensions, ImageBackground, StyleSheet, Text, View, Animated } from 'react-native';
import React, { useState, useRef, useEffect } from 'react';

import { restaurantsData } from '../global/data';
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

const SCREEN_WIDTH = Dimensions.get('window').width;

const RestaurantHeaderComponent = ({ id }) => {

    const navigation = useNavigation();

    const index2 = 10;
    const [liked, setLiked] = useState(false);
    const [counter, setCounter] = useState(-2);
    const [visible, setVisible] = useState(false);
    const scaleValue = useRef(new Animated.Value(0)).current;

    const likeHandle = () => {
        if (!liked) {
            setVisible(true);
            animateHeart();
        }
        setLiked(!liked);
        setCounter(index2);
    };

    // animation heart sau khi click icon heart
    const animateHeart = () => {
        scaleValue.setValue(0);
        Animated.spring(scaleValue, {
            toValue: 1,
            friction: 2,
            useNativeDriver: true,
        }).start(() => {
            Animated.timing(scaleValue, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true,
            }).start(() => setVisible(false));
        });
    };

    const heartScale = scaleValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0.5, 1.5]
    });

    

    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.container}
                source={{ uri: restaurantsData[id].images }}
                imageStyle={styles.image}
            >

                <View style={styles.iconContainer}>
                    <View style={styles.iconGoBack}>
                        <Icon
                            name='arrow-left'
                            size={30}
                            color='black'
                            onPress={() => navigation.goBack()}
                            type='material-community'
                        />
                    </View>

                    <View style={styles.iconHeart}>
                        <Icon
                            name={liked && (index2 == counter) ? 'heart' : 'heart-outline'}
                            size={30}
                            color='red'
                            onPress={likeHandle}
                            type='material-community'
                        />
                    </View>
                </View>

                {/* animation heart */}
                <View style={styles.animatedHeartContainer}>
                    {
                        visible && (index2 == counter) &&
                        <Animated.View style={{ transform: [{ scale: heartScale }] }}>
                            <Icon
                                name='heart'
                                size={80}
                                color='red'
                                type='material-community'
                            />
                        </Animated.View>
                    }
                </View>
            </ImageBackground>
        </View>
    )
};

export default RestaurantHeaderComponent;

const styles = StyleSheet.create({
    container: {
        height: 200,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        resizeMode: 'cover',
        width: SCREEN_WIDTH,
        height: 200,
        alignItems: 'center',
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: SCREEN_WIDTH,
        position: 'absolute',
        top: 5,
        marginTop: 5,
    },
    iconGoBack: {
        marginLeft: 10,
        backgroundColor: 'white',
        borderRadius: 50,
        padding: 5,
    },
    iconHeart: {
        marginRight: 10,
        backgroundColor: 'white',
        borderRadius: 50,
        padding: 5,
    },
    animatedHeartContainer: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{ translateX: -20 }, { translateY: -20 }],
    },
});
