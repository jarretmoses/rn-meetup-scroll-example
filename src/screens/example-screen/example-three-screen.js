import React, { PureComponent } from 'react';
import { ScrollView } from 'react-native';

import Card from '../../components/card/card';
import data from '../../constants/data';
import styles from './styles';

class ExampleThreeScreen extends PureComponent {
  static navigationOptions = () => ({
    headerTitle: 'Example 3',
  })

  _renderCards = () => (
    data.map((number) => <Card number={number} key={number} />)
  )

  render() {
    return (
      <ScrollView
        style={styles.container}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      >
        {this._renderCards()}
      </ScrollView>
    )
  }
}

export default ExampleThreeScreen;
