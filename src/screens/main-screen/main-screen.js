import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import randomColor from 'randomcolor';


export default class MainScreen extends Component {
  render() {
    return (
      <View style={styles.container} />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: randomColor(),
  }
})
