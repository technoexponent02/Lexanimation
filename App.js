/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useRef, useState } from 'react';
import {
  Animated, ImageBackground,

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
  const animationVal = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0
  const [count, setCount] = useState(0);
  const onIncrease = () => {
    setCount(count + 1)
  }
  const onDecrease = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }
  const onSwipe = (gestureName, gestureState) => {
    const { SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections;
    if (gestureName === SWIPE_UP) {
      alert('Swiped up successfully.')
    }
  }
  const anim = () => {
    Animated.sequence([
      Animated.timing(animationVal, { toValue: 1, duration: 1000, useNativeDriver: false }),
      Animated.timing(animationVal, { toValue: 0, duration: 1000, useNativeDriver: false }),
    ]).start(() => anim());
  }
  React.useEffect(() => {
    anim()
  }, [])
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

        <Track animationVal={animationVal} />
        <View style={styles.btnContainer}>
          <SwipeableButton
            animationVal={animationVal}
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
