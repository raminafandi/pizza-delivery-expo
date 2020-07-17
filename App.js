import React from 'react';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import MenuScreen from './src/screens/MenuScreen';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import CardScreen from './src/screens/CardScreen';
import ExploreScreen from './src/screens/ExploreScreen';
import AccountScreen from './src/screens/AccountScreen';

import {
  AntDesign,
  FontAwesome5,
  FontAwesome,
  Feather,
} from '@expo/vector-icons';

const switchNavigator = createSwitchNavigator({
  mainFlow: createBottomTabNavigator({
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({}) => <AntDesign name="home" size={24} color="red" />,
      },
    },
    Explore: {
      screen: ExploreScreen,
      navigationOptions: {
        tabBarLabel: 'Explore',
        tabBarIcon: ({}) => (
          <FontAwesome5 name="compass" size={24} color="red" />
        ),
      },
    },
    Card: {
      screen: CardScreen,
      navigationOptions: {
        tabBarLabel: 'Card',
        tabBarIcon: ({}) => (
          <Feather name="shopping-cart" size={24} color="red" />
        ),
      },
    },
    Account: {
      screen: AccountScreen,
      navigationOptions: {
        tabBarLabel: 'Account',
        tabBarIcon: ({}) => (
          <FontAwesome name="reorder" size={24} color="red" />
        ),
      },
    },

    // homeScreenFlow: createStackNavigator({
    //   TrackList: TrackListScreen,
    //   TrackDetail: TrackDetailScreen,
    // }),
  }),
});

// const switchNavigator = createStackNavigator(
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

export default createAppContainer(switchNavigator);
