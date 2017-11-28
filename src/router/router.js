import { StackNavigator } from 'react-navigation';

import MainScreen from '../screens/main-screen/main-screen';
import ExampleOneScreen from '../screens/example-one-screen/example-one-screen';

export default StackNavigator({
  Main: {
    screen: MainScreen
  },
  ExampleOne: {
    screen: ExampleOneScreen
  },
  initialRouteName: {
    screen: MainScreen
  }
})
