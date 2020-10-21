import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../constants/colors';
import Dimension from '../constants/Dimension';
const userImg = require('../assets/images/user.png')


export default Header = props => {
    return (
        <TouchableOpacity style={styles.touchable} activeOpacity={1} onPress={props.onClick} >
            <View style={styles.userInfo}>
                <Image
                    source={userImg}
                    style={styles.img}
                />
                <Text style={styles.terminalTxt}>
                    {'TERMINAL-2'}
                </Text>
            </View>
            <View style={styles.countView}>
                <Text style={styles.countTxt}>
                    {'We are picking up ' +props.count+' item'}
                </Text>
            </View>
        </TouchableOpacity>
    );

}
const styles = StyleSheet.create({
    touchable: {
        width: Dimension._width80per,
        height: 120,
        backgroundColor: colors.colorPrimary,
        margin: 20,
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
    userInfo: {
        backgroundColor: colors.colorWhite,
        borderRadius: 20,
        position: 'absolute',
        top: -5,
        left: -5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-around',
        padding:10
    },
    terminalTxt: {
        color:colors.colorPrimary
    },
    img: {
        height: 20,
        width: 20,
        marginRight:10
    },
    countView:{
        backgroundColor: colors.colorAccent,
        padding:10,
        borderRadius:20
    },
    countTxt:{
        color:colors.colorWhite,
        fontSize:Dimension.smallTxt,
    }
});