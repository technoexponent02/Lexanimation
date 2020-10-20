import React, { useEffect, useState } from 'react';
import { Animated, StyleSheet } from 'react-native';
import colors from '../constants/colors';
import Dimension from '../constants/Dimension';
const bg = require('../assets/images/trackWithImg.png')
const arrow1 = require('../assets/images/arrow1.png')
const arrow2 = require('../assets/images/arrow2.png')
const arrow3 = require('../assets/images/arrow3.png')
const arrow4 = require('../assets/images/arrow4.png')
export default Counter = props => {
    const [liked, setLiked] = useState(false);
    const animatedValue = new Animated.Value(0);
    const { onIncrease, onDecrease, count } = props;

    const toggleLike = () => {
        alert(liked)
        setLiked((liked) => {
            const newLiked = !liked;
            if (newLiked) {
                Animated.sequence([
                    Animated.spring(animatedValue, { toValue: 1, useNativeDriver: true }),
                    Animated.spring(animatedValue, { toValue: 0, userNativeDriver: true }),
                ]).start(onSpringCompletion);
            }
            return { liked: newLiked };
        });
    }
    const onSpringCompletion = () => {
        toggleLike()
    }
    const imageStyles = [
        styles.imgBackground,
        {
            opacity: 1,
            // transform: [
            //     {
            //         scale: animatedValue.interpolate({
            //             inputRange: [0, 1],
            //             outputRange: [0.7, 1.5],
            //         }),
            //     },
            // ],
        },
    ];
    useEffect(() => {
        // toggleLike()
    }, [])

    return (
        <>
            <Animated.Image
                source={bg}
                style={[styles.imgBackground, imageStyles]} >
            </Animated.Image>
        </>
    );

}
const styles = StyleSheet.create({

    imgBackground: {
        width: Dimension._width60per,
        height: Dimension._width80per,
        position: 'absolute',
        top: '50%',
        left: '25%',
        right: 0,
    },
    img: {
        height: 35,
        width: 60,
        backgroundColor: colors.colorWhatsappGreen,
    }

});