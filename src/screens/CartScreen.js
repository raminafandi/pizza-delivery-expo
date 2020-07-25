import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  SafeAreaView,
} from 'react-native';

import ItemAddedToCart from '../components/ItemAddedToCart';
import { FlatList } from 'react-native-gesture-handler';

import Pizzas from '../data/pizzas.json';

const CartScreen = ({}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={Pizzas.slice(0, 3)}
        keyExtractor={(item, index) => item.id.toString()}
        renderItem={({ item }) => <ItemAddedToCart data={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: 'white',
    flex: 1,
  },
});

export default CartScreen;
