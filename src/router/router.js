import { StackNavigator } from 'react-navigation';

import MainScreen from '../screens/main-screen/main-screen';

export default StackNavigator({
  Main: {
    screen: MainScreen
  },
  initialRouteName: {
    screen: MainScreen
  }
})
