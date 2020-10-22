import React from 'react';
import { Animated, Image, ImageBackground, StyleSheet } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import Dimension from '../constants/Dimension';

const bg = require('../assets/images/track.png')
const arrow1 = require('../assets/images/arrow1.png')
const arrow2 = require('../assets/images/arrow2.png')
const arrow3 = require('../assets/images/arrow3.png')
const arrow4 = require('../assets/images/arrow4.png')



const AnimatedImage = (props) => {
    const { animationVal, delay } = props;
    return (
        <Animated.View                 // Special animatable View
            style={{
                ...props.style,
                opacity: animationVal.interpolate({
                    inputRange: [0, 0.5, 1],
                    outputRange: [0.3, delay, 1],
                }),
                transform: [
                    {
                        scale: animationVal.interpolate({
                            inputRange: [0, delay],
                            outputRange: [0.9, 0.95],
                        }),
                    }
                ]
            }}
        >
            {props.children}
        </Animated.View>
    );
}

export default Track = props => {
    const { animationVal, onSwipeUp } = props;

    return (
        <GestureRecognizer
            onSwipeUp={onSwipeUp}>
            <ImageBackground
                source={bg}
                resizeMode={'stretch'}
                style={styles.container}>
                <Animated.View style={{
                    marginBottom: animationVal.interpolate({
                        inputRange: [0, 1],
                        outputRange: [20, -20],
                    }),
                    marginLeft: animationVal.interpolate({
                        inputRange: [0, 1],
                        outputRange: [20, 0],
                    }),
                }}>
                    <AnimatedImage delay={1} animationVal={animationVal}>
                        <Image
                            source={arrow1}
                            style={styles.img1}
                            resizeMode={'contain'}
                        />
                    </AnimatedImage>
                    <AnimatedImage delay={0.75} animationVal={animationVal}>
                        <Image
                            source={arrow2}
                            style={styles.img2}
                            resizeMode={'contain'}
                        />
                    </AnimatedImage>
                    <AnimatedImage delay={0.5} animationVal={animationVal}>
                        <Image
                            source={arrow3}
                            style={styles.img3}
                            resizeMode={'contain'}
                        />
                    </AnimatedImage>
                    <AnimatedImage delay={0.25} animationVal={animationVal}>
                        <Image
                            source={arrow4}
                            style={styles.img4}
                            resizeMode={'contain'}
                        />
                    </AnimatedImage>
                </Animated.View>
            </ImageBackground>
        </GestureRecognizer>


    );

}
const styles = StyleSheet.create({

    container: {
        width: Dimension._width100per,
        height: Dimension._height100per / 2,
        justifyContent: 'center'
    },
    img1: {
        width: Dimension._width100per,
        height: Dimension._width10per,
        marginLeft: Dimension._width30per / 2,
        marginTop: Dimension._width10per
    },
    img2: {
        width: Dimension._width100per,
        height: Dimension._width10per,
        marginLeft: Dimension._width10per
    },
    img3: {
        width: Dimension._width100per,
        height: Dimension._width10per,
        marginLeft: Dimension._width10per / 2
    },
    img4: {
        height: Dimension._width30per / 2,
        width: Dimension._width100per,
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