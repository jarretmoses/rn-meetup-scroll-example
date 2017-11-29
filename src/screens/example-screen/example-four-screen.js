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

const getRotate = (animatedScroll, i) => {
  const inputRange = [
    (i - 1) * width,
    i * width,
    (i + 1) * width,
  ];

  const outputRange = ['-90deg', '0deg', '90deg'];

  return animatedScroll.interpolate({
    inputRange,
    outputRange,
    extrapolate: 'clamp',
  });
};

class ExampleFourScreen extends PureComponent<{}> {
  _animatedValue: Object

  static navigationOptions = () => ({
    headerTitle: 'Example 4',
  })

  _animatedValue = new Animated.Value(0);

  _renderCards = () => (
    data.map((number, i) => {
      const rotate = getRotate(this._animatedValue, i);
      const animatedStyles = {
        transform: [
          {scale: getScale(this._animatedValue, i)},
          {rotateX: rotate},
          {rotateY: rotate}
        ]
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

export default ExampleFourScreen;
