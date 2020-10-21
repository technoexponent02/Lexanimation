import React from 'react';
import { Animated, StyleSheet, Text } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import colors from '../constants/colors';
import Dimension from '../constants/Dimension';

export default SwipeableButton = props => {
    const config = {
        velocityThreshold: 0.3,
        directionalOffsetThreshold: 80
    };
    const { onSwipe, animationVal } = props;

    return (
        <GestureRecognizer
            onSwipe={(direction, state) => onSwipe(direction, state)}
            config={config}
        >

            <Animated.View style={[styles.touchable, {
                marginBottom: animationVal.interpolate({
                    inputRange: [0, 0.1, 1],
                    outputRange: [-15, 0, 0],
                }),
                transform: [
                    {
                        scale: animationVal.interpolate({
                            inputRange: [0, 0.1, 1],
                            outputRange: [0.9, 1.1, 1.1],
                        }),
                    },
                ],
            }]}  >
                <Text style={styles.txt} >{'Swipe to Skip'}</Text>
            </Animated.View>
        </GestureRecognizer>
    );
}
const styles = StyleSheet.create({
    touchable: {
        width: Dimension._width50per,
        height: 50,
        backgroundColor: colors.colorPrimary,
        margin: 0,
        borderRadius: 40,
        paddingVertical: 3,
        // overflow: 'hidden',
        alignItems: 'center',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        shadowColor: colors.colorBlack,
        shadowOffset: {
            height: 5,
            width: 5
        },
        shadowOpacity: 0,
    },
    txt: {
        color: colors.colorWhite,
        fontSize: Dimension.largeTxt
    }
});

