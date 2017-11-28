// @flow
import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import randomColor from 'randomcolor';

import styles from './styles';

type Props = {
  number: number
}

export default class Card extends PureComponent<Props> {
  render() {
    const cardStyles = [
      styles.container,
      { backgroundColor: randomColor() }
    ];

    return (
      <View style={cardStyles}>
        <Text>CARD {this.props.number}</Text>
      </View>
    )
  }
}
