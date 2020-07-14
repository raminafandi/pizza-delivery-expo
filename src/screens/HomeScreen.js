import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import DeliveryCard from '../components/DeliveryCard';
import HeaderViewAll from '../components/HeaderViewAll';

const DetailsScreen = ({}) => {
  return (
    <View style={styles.container}>
      <DeliveryCard />
      <HeaderViewAll />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
});

export default DetailsScreen;
