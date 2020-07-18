import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';

import ItemAddedToCart from '../components/ItemAddedToCart';
import { FlatList } from 'react-native-gesture-handler';

import Pizzas from '../data/pizzas.json';

const CardScreen = ({}) => {
  return (
    <ScrollView style={styles.container}>
      {/* <FlatList data={} /> */}
      <ItemAddedToCart data={Pizzas[0]} />
      <ItemAddedToCart data={Pizzas[1]} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: 'white',
    flex: 1,
  },
});

export default CardScreen;
