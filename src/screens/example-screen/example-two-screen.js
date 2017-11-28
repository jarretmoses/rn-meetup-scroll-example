import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import Card from '../../components/card/card';
import data from '../../constants/data';
import styles from './styles';

export default class MainScreen extends Component {
  _renderCards = () => (
    data.map((number) => <Card number={number} key={number} />)
  )

  render() {
    return (
      <ScrollView
        horizontal
        pagingEnabled
        style={styles.container}
      >
        {this._renderCards()}
      </ScrollView>
    )
  }
}
