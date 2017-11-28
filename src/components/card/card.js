import React, { PureComponent } from 'react';
import { View } from 'react-native';
import randomColor from 'randomcolor';

import styles from './styles';

export default class Card extends PureComponent {
  render() {
    const cardStyles = [
      styles.container,
      { backgroundColor: randomColor() }
    ];

    return (
      <View style={cardStyles} />
    )
  }
}
