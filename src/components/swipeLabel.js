import React from 'react';
import { Animated, StyleSheet, Text } from 'react-native';
import colors from '../constants/colors';
import Dimension from '../constants/Dimension';

export default SwipeableButton = props => {

    const { animationVal } = props;

    return (

        <Animated.View style={[styles.touchable, {
            transform: [
                {
                    scale: animationVal.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0.9, 1],
                    }),
                },
            ],
        }]}  >
            <Text style={styles.txt} >{'Swipe to Skip'}</Text>
        </Animated.View>
    );
}
const styles = StyleSheet.create({
    touchable: {
        width: Dimension._width50per,
        height: 50,
        backgroundColor: colors.colorPrimary,
        borderRadius: 40,
        paddingVertical: 3,
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

