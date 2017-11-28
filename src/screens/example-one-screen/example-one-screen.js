import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import Card from '../../components/card/card';
import styles from './styles';

const arr = [1,2,3,4,5,6,7,8,9]

export default class MainScreen extends Component {
  _renderCards = () => (
    arr.map((number) => <Card number={number} key={number} />)
  )

  render() {
    return (
      <ScrollView style={styles.container}>
        {this._renderCards()}
      </ScrollView>
    )
  }
}
