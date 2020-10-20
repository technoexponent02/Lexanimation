import React, { useState } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import Dimension from '../constants/Dimension';
const bg = require('../assets/images/track.png')
const arrow1 = require('../assets/images/arrow1.png')
const arrow2 = require('../assets/images/arrow2.png')
const arrow3 = require('../assets/images/arrow3.png')
const arrow4 = require('../assets/images/arrow4.png')
export default Counter = props => {
    const [showBtn, setShowBtn] = useState(true);
    const { onIncrease, onDecrease, count } = props;
    return (
        <ImageBackground
            source={bg}
            style={styles.imgBackground} >
            {/* <Image
                source={track}
                resizeMode={'stretch'}
                style={styles.img}
            />
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
            </View> */}
        </ImageBackground>
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

});