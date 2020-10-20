/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  ImageBackground,
  StatusBar, StyleSheet, View
} from 'react-native';
import { swipeDirections } from 'react-native-swipe-gestures';
import Counter from './src/components/counter';
import Header from './src/components/header';
import SwipeableButton from './src/components/swipeableButton';
import Track from './src/components/track';
import colors from './src/constants/colors';
import Dimension from './src/constants/Dimension';
const bg = require('./src/assets/images/background.png')

const App: () => React$Node = () => {
  const [count, setCount] = useState(0);
  const onIncrease = () => {
    setCount(count + 1)
  }
  const onDecrease = () => {
    setCount(count - 1)
  }
  const onSwipe = (gestureName, gestureState) => {
    const { SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections;
    switch (gestureName) {
      case SWIPE_UP:
        alert('Button Swiped')
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
    <>
      <StatusBar barStyle="dark-content" />
      <ImageBackground
        source={bg}
        style={{ flex: 1 }}>
        <View style={{ marginTop: 50 }}>
          <Header
            count={count}
          />
        </View>
        <View style={styles.counterContainer}>
          <Counter
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            count={count}
          />
        </View>

        <Track />
        <View style={styles.btnContainer}>
          <SwipeableButton
            onSwipe={onSwipe}
          />
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: colors.colorPrimary,
  },
  body: {
    backgroundColor: colors.colorAccent,
  },

  btnContainer: {
    position: 'absolute',
    left: 0, right: 0,
    bottom: 20
  },
  counterContainer: {
    marginLeft: Dimension._width100per - 120,
    marginTop: 50
  }

});

export default App;
