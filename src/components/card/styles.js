import { Dimensions, StyleSheet } from 'react-native';

const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    height: height - 43,
    width,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
