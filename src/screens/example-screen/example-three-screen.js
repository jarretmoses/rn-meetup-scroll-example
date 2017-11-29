// @flow
import React, { PureComponent } from 'react';
import { Dimensions, Animated, ScrollView } from 'react-native';

import Card from '../../components/card/card';
import data from '../../constants/data';
import styles from './styles';

const { width } = Dimensions.get('window');

const getScale = (animatedScroll, i) => {
  const inputRange = [
    (i - 1) * width,
    i * width,
    (i + 1) * width,
  ];

  const outputRange = [0.8, 1, 0.8];

  return animatedScroll.interpolate({
    inputRange,
    outputRange,
    extrapolate: 'clamp',
  });
};

class ExampleThreeScreen extends PureComponent<{}> {
  _animatedValue: Object

  _animatedValue = new Animated.Value(0);

  _renderCards = () => (
    data.map((number, i) => {
      const animatedStyles = {
        transform: [{scale: getScale(this._animatedValue, i)}]
      }

      return (
        <Card
          number={number}
          key={number}
          animatedStyles={animatedStyles}
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

export default ExampleThreeScreen;
