// @flow
import React, { PureComponent } from 'react';
import { Animated, View, Text } from 'react-native';
import randomColor from 'randomcolor';

import styles from './styles';

const AnimatedView = Animated.createAnimatedComponent(View)

type Props = {
  number: number,
  animatedStyles?: Object,
}

export default class Card extends PureComponent<Props> {
  render() {
    const { animatedStyles, number } = this.props;
    const cardStyles = [
      styles.container,
      { backgroundColor: randomColor() },
      animatedStyles
    ];

    const Wrapper = animatedStyles
      ? AnimatedView
      : View;

    return (
      <Wrapper style={cardStyles}>
        <Text>CARD {number}</Text>
      </Wrapper>
    )
  }
}
