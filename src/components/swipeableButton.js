import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import colors from '../constants/colors';
import Dimension from '../constants/Dimension';

export default FullWidthButton = props => {
    const [showBtn, setShowBtn] = useState(true);
    const config = {
        velocityThreshold: 0.3,
        directionalOffsetThreshold: 80
    };
    const {onSwipe} = props;
    return (
        <GestureRecognizer
            onSwipe={(direction, state) => onSwipe(direction, state)}
            config={config}
        >
            <TouchableOpacity style={styles.touchable} activeOpacity={1} onPress={props.onClick} >
                <Text style={styles.txt} >{'Swipe to Skip'}</Text>
            </TouchableOpacity>
        </GestureRecognizer>
    );
}
const styles = StyleSheet.create({
    touchable: {
        width: Dimension._width50per,
        height:70,
        backgroundColor:colors.colorPrimary,
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
    txt:{
        color:colors.colorWhite,
        fontSize:Dimension.largeTxt
    }
});

