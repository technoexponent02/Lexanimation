import React, { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Dimension from '../constants/Dimension';
export default Header = props => {
    const [showBtn, setShowBtn] = useState(true);

    return (
        <View style={styles.container}>
            <Image
                source={props.source}
                style={styles.img}
            />
        </View>
    );

}
const styles = StyleSheet.create({
    container: {
        width: Dimension._width100per,
    },

    img: {
        height: 40,
        width: 100,
        marginRight: 10
    },

});