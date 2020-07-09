import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MenuScreen from './src/screens/MenuScreen';
import DetailsScreen from './src/screens/DetailsScreen';
const navigator = createStackNavigator(
  {
    Menu: MenuScreen,
    Details: DetailsScreen,
  },
  {
    initialRootName: 'Menu',
    defaultNavigationOptions: {
      title: 'Menu',
    },
  }
);

export default createAppContainer(navigator);
