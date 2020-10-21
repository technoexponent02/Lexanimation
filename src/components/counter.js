import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import colors from '../constants/colors';
import Dimension from '../constants/Dimension';
const suitcase = require('../assets/images/trolley.png')
const bg = require('../assets/images/counter.png')
export default Counter = props => {
    const { onIncrease, onDecrease, count } = props;
    return (
        <ImageBackground
            source={bg}
            style={styles.container} activeOpacity={1} onPress={props.onClick} >
            <Text
                onPress={onDecrease}
                style={styles.decrement}>
                -
            </Text>
            <Image
                source={suitcase}
                style={styles.img}
            />
            <Text
                onPress={onIncrease}
                style={styles.increment}>
                +
            </Text>
            <View style={styles.countView}>
                <Text style={styles.countTxt}>
                    {count || 0}
                </Text>
            </View>
        </ImageBackground>
    );

}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 100,
        width: 100,
    },
    terminalTxt: {
        color: colors.colorPrimary
    },
    img: {
        height: 40,
        width: 20,
    },
    increment: {
        color: colors.colorWhite,
        fontSize: Dimension.largeTxt,
        height: 30,
        width: 30,
        textAlign: 'center'
    },
    decrement: {
        color: colors.colorWhite,
        fontSize: Dimension.largeTxt,
        height: 30,
        width: 30,
        textAlign: 'center'

    },
    countView: {
        backgroundColor: colors.colorWhite,
        height: 40,
        width: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: -6,
        right: -6
    }
});