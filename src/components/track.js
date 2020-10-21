import React from 'react';
import { Animated, Image, ImageBackground, StyleSheet } from 'react-native';
import Dimension from '../constants/Dimension';
const bg = require('../assets/images/track.png')
const arrow1 = require('../assets/images/arrow1.png')
const arrow2 = require('../assets/images/arrow2.png')
const arrow3 = require('../assets/images/arrow3.png')
const arrow4 = require('../assets/images/arrow4.png')


const FadeInView1 = (props) => {
    const { animationVal } = props;
    return (
        <Animated.View
            style={{
                ...props.style,
                opacity: animationVal.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 1],
                }),
            }}
        >
            {props.children}
        </Animated.View>
    );
}
const FadeInView2 = (props) => {
    const { animationVal } = props;
    return (
        <Animated.View
            style={{
                ...props.style,
                opacity: animationVal.interpolate({
                    inputRange: [0, 0.7],
                    outputRange: [0, 1],
                })
            }}
        >
            {props.children}
        </Animated.View>
    );
}
const FadeInView3 = (props) => {
    const { animationVal } = props;
    return (
        <Animated.View
            style={{
                ...props.style,
                opacity: animationVal.interpolate({
                    inputRange: [0, 0.4],
                    outputRange: [0, 1],
                })
            }}
        >
            {props.children}
        </Animated.View>
    );
}
const FadeInView4 = (props) => {
    const { animationVal } = props;


    return (
        <Animated.View                 // Special animatable View
            style={{
                ...props.style,
                opacity: animationVal.interpolate({
                    inputRange: [0, 0.1],
                    outputRange: [0, 1],
                })
            }}
        >
            {props.children}
        </Animated.View>
    );
}

export default Track = props => {

    const { animationVal } = props;

    return (
        <Animated.View style={{
            opacity: animationVal.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
            })
        }}>
            <ImageBackground
                source={bg}
                style={[styles.container, { backfaceVisibility: 'visible' }]}>
                <FadeInView1 animationVal={animationVal}>
                    <Image
                        source={arrow1}
                        style={styles.img1}
                        resizeMode={'contain'}
                    />
                </FadeInView1>
                <FadeInView2 animationVal={animationVal}>
                    <Image
                        source={arrow2}
                        style={styles.img2}
                        resizeMode={'contain'}
                    />
                </FadeInView2>
                <FadeInView3 animationVal={animationVal}>
                    <Image
                        source={arrow3}
                        style={styles.img3}
                        resizeMode={'contain'}
                    />
                </FadeInView3>
                <FadeInView4 animationVal={animationVal}>
                    <Image
                        source={arrow4}
                        style={styles.img4}
                        resizeMode={'contain'}
                    />
                </FadeInView4>
            </ImageBackground>
        </Animated.View>

    );

}
const styles = StyleSheet.create({

    container: {
        width: Dimension._width60per,
        height: Dimension._width60per,
        position: 'absolute',
        bottom: -Dimension._width60per,
        left: '25%',
        right: 0,
    },
    img1: {
        height: 20,
        width: 40,
        marginLeft: 150,
        marginTop: 30
    },
    img2: {
        height: 30,
        width: 40,
        marginLeft: 130,
    },
    img3: {
        height: 40,
        width: 60,
        marginLeft: 90,
    },
    img4: {
        height: 50,
        width: 100,
        marginLeft: 40,
    },
    imgBackground: {
        width: Dimension._width60per,
        height: Dimension._width80per,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: -5
    }

});