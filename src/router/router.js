import { StackNavigator } from 'react-navigation';

import MainScreen from '../screens/main-screen/main-screen';
import ExampleOneScreen from '../screens/example-screen/example-one-screen';
import ExampleTwoScreen from '../screens/example-screen/example-two-screen';
import ExampleThreeScreen from '../screens/example-screen/example-three-screen';
import ExampleFourScreen from '../screens/example-screen/example-four-screen';

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
  ExampleThree: {
    screen: ExampleThreeScreen
  },
  ExampleFour: {
    screen: ExampleFourScreen
  },
  initialRouteName: {
    screen: MainScreen
  }
})
