// @flow
import React, { Component } from 'react';
import {
  Button,
  View,
  StyleSheet
} from 'react-native';

import styles from './styles';

type Props = {
  navigation: Object
}

export default class MainScreen extends Component<Props> {

  _exampleOne: Function
  _exampleTwo: Function
  _exampleThree: Function

  static navigationOptions = () => ({
    header: null,
  })

  componentWillMount() {
    this._exampleOne = this._navigate.bind(this, 'ExampleOne');
    this._exampleTwo = this._navigate.bind(this, 'ExampleTwo');
    this._exampleThree = this._navigate.bind(this, 'ExampleThree');
  }

  _navigate = (route: string) => {
    this.props.navigation.navigate(route)
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={this._exampleOne}
          title='Example 1'
        />
        <Button
          onPress={this._exampleTwo}
          title='Example 2'
        />
        <Button
          onPress={this._exampleThree}
          title='Example 3'
        />
      </View>
    )
  }
}
