// @flow
import React, { PureComponent } from 'react';
import { Dimensions, Animated, ScrollView } from 'react-native';

import Card from '../../components/card/card';
import data from '../../constants/data';
import styles from './styles';

const { width } = Dimensions.get('window');

const getParallax = (animatedScroll, i) => {
  const inputRange = [
    (i - 1) * width,
    i * width,
    (i + 1) * width,
  ];

  const outputRange = [100, 0, 100];

  return animatedScroll.interpolate({
    inputRange,
    outputRange,
    extrapolate: 'clamp',
  });
};

class ExampleFourScreen extends PureComponent<{}> {
  _animatedValue: Object

  _animatedValue = new Animated.Value(0);

  _renderCards = () => (
    data.map((number, i) => {
      const animatedTextStyles = {
        transform: [
          {translateX: getParallax(this._animatedValue, i)},
          // {translateY: getParallax(this._animatedValue, i)},
        ]
      }

      return (
        <Card
          number={number}
          key={number}
          animatedTextStyles={animatedTextStyles}
        />
      )
    })
  )

  render() {
    return (
      <ScrollView
        style={styles.container}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event([
          { nativeEvent: { contentOffset: { x: this._animatedValue } } },
        ])}
      >
        {this._renderCards()}
      </ScrollView>
    )
  }
}

export default ExampleFourScreen;
