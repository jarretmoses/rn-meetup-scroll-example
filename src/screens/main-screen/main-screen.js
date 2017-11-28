import React, { Component } from 'react';
import {
  Button,
  View,
  StyleSheet
} from 'react-native';

import styles from './styles';

export default class MainScreen extends Component {
  static navigationOptions = () => ({
    header: null,
  })

  _exampleOne = () => {
    this.props.navigation.navigate('ExampleOne')
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={this._exampleOne}
          title='Example 1'
        />
        <Button
          onPress={() => {}}
          title='Example 2'
        />
        <Button
          onPress={() => {}}
          title='Example 3'
        />
      </View>
    )
  }
}
