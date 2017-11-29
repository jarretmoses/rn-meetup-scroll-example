// @flow
import React, { PureComponent } from 'react';
import { Animated, View, Text } from 'react-native';
import randomColor from 'randomcolor';

import styles from './styles';

const AnimatedView = Animated.createAnimatedComponent(View);
const AnimatedText = Animated.createAnimatedComponent(Text);

type Props = {
  number: number,
  animatedStyles?: Object,
  animatedTextStyles?: Object,
}

class Card extends PureComponent<Props> {
  render() {
    const {
      animatedStyles,
      animatedTextStyles,
      number
    } = this.props;
    const cardStyles = [
      styles.container,
      { backgroundColor: randomColor() },
      animatedStyles
    ];

    const textStyles = [
      styles.text,
      animatedTextStyles
    ];

    const Wrapper = animatedStyles
      ? AnimatedView
      : View;

    const TextWrapper = animatedTextStyles
      ? AnimatedText
      : Text;

    return (
      <Wrapper style={cardStyles}>
        <TextWrapper style={textStyles}>
          CARD {number}
        </TextWrapper>
      </Wrapper>
    )
  }
}

export default Card;
