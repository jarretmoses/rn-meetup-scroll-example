import React, { Component } from 'react';
import {
  Button,
  View,
  StyleSheet
} from 'react-native';

export default class MainScreen extends Component {
  static navigationOptions = () => ({
    header: null,
  });

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => {}}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 50,
  }
})
