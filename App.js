import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MenuScreen from './src/screens/MenuScreen';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
});

// const AppNavigator = createStackNavigator(
//   {
//     Menu: {
//       screen: MenuScreen,
//     },
//     Details: {
//       screen: DetailsScreen,
//       navigationOptions: {
//         headerShown: false,
//       },
//     },
//   },
//   {
//     // initialRouteName: 'Home',
//   }
// );

export default createAppContainer(AppNavigator);
