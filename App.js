import React from 'react';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import MenuScreen from './src/screens/MenuScreen';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';

const switchNavigator = createSwitchNavigator({
  mainFlow: createBottomTabNavigator({
    Explore: ExploreScreen,
    Account: AccountScreen,

    homeScreenFlow: createStackNavigator({
      TrackList: TrackListScreen,
      TrackDetail: TrackDetailScreen,
    }),
  }),
});

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
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
