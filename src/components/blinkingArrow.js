import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
import colors from '../constants/colors';
import Dimension from '../constants/Dimension';

export default FullWidthButton = props => {
    const onSwipe = (gestureName, gestureState) => {
        const { SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections;
        switch (gestureName) {
            case SWIPE_UP:
                alert('up')
                break;
            case SWIPE_DOWN:
                // this.setState({backgroundColor: 'green'});
                break;
            case SWIPE_LEFT:
                // this.setState({backgroundColor: 'blue'});
                break;
            case SWIPE_RIGHT:
                // this.setState({backgroundColor: 'yellow'});
                break;
        }
    }
    return (
        <GestureRecognizer
            onSwipe={(direction, state) => onSwipe(direction, state)}
            onSwipeUp={(state) => this.onSwipeUp(state)}
            onSwipeDown={(state) => this.onSwipeDown(state)}
            onSwipeLeft={(state) => this.onSwipeLeft(state)}
            onSwipeRight={(state) => this.onSwipeRight(state)}
            config={config}
            style={{
                flex: 1,
                backgroundColor: this.state.backgroundColor
            }}
        >
            <TouchableOpacity activeOpacity={1} onPress={props.onClick} style={styles.signup}>
                <Text>{'Swipe Up'}</Text>
            </TouchableOpacity>

        </GestureRecognizer>
    );
}
const styles = StyleSheet.create({
    signup: {
        width: Dimension._width50per,
        marginBottom: 20,
        borderRadius: 13,
        paddingVertical: 3,
        // overflow: 'hidden',
        alignItems: 'center',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        borderWidth: 2,
        shadowColor: colors.colorBlack,
        shadowOffset: {
            height: 5,
            width: 5
        },
        shadowOpacity: 0,
    },
});

