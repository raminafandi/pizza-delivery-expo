import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import DeliveryCard from '../components/DeliveryCard';
import HeaderViewAll from '../components/HeaderViewAll';
import MediumInfoCard from '../components/MediumInfoCard';

import Pizzas from '../data/pizzas.json';
const DetailsScreen = ({}) => {
  return (
    <View style={styles.container}>
      <DeliveryCard />
      <HeaderViewAll />
      <MediumInfoCard data={Pizzas[0]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '255, 255, 255',
    height: '100%',
    flex: 1,
  },
});

export default DetailsScreen;
