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

  SafeAreaView,

  StatusBar, StyleSheet, View
} from 'react-native';
import Counter from './src/components/counter';
import Header from './src/components/header';
import SwipeLabel from './src/components/swipeLabel';
import Track from './src/components/track';
import colors from './src/constants/colors';
import Dimension from './src/constants/Dimension';
const bg = require('./src/assets/images/background.png')

const App = () => {
  const animationVal = useRef(new Animated.Value(0)).current
  const [count, setCount] = useState(0);
  const onIncrease = () => {
    setCount(count + 1)
  }
  const onDecrease = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }
  const onSwipe = () => {
    alert('Swiped up successfully.')
  }
  const animate = () => {
    Animated.sequence([
      Animated.spring(animationVal, { toValue: 1, duration: 2000, useNativeDriver: false }),
      Animated.spring(animationVal, { toValue: 0, duration: 300, useNativeDriver: false }),
    ]).start(() => animate());
  }
  React.useEffect(() => {
    animate()
  }, [])
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ImageBackground
          source={bg}
          style={{ height: Dimension._height100per, justifyContent: 'space-between' }}>
          <View style={{ height: Dimension._height100per / 2, justifyContent: 'space-around' }}>
            <Header
              count={count}
            />
            <Counter
              onIncrease={onIncrease}
              onDecrease={onDecrease}
              count={count}
            />
          </View>
          <View style={{ height: Dimension._height100per / 2, justifyContent: 'space-around'}}>
            <Track onSwipeUp={onSwipe}
              animationVal={animationVal} />
            <SwipeLabel
              animationVal={animationVal}
            />
          </View>
        </ImageBackground>
      </SafeAreaView>
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
  counterContainer: {
    marginLeft: Dimension._width50per,
  }

});

export default App;
