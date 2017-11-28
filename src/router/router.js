import { StackNavigator } from 'react-navigation';

import MainScreen from '../screens/main-screen/main-screen';
import ExampleOneScreen from '../screens/example-screen/example-one-screen';
import ExampleTwoScreen from '../screens/example-screen/example-two-screen';

export default StackNavigator({
  Main: {
    screen: MainScreen
  },
  ExampleOne: {
    screen: ExampleOneScreen
  },
  ExampleTwo: {
    screen: ExampleTwoScreen
  },
  initialRouteName: {
    screen: MainScreen
  }
})
