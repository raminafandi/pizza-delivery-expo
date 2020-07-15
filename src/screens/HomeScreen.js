import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import DeliveryCard from '../components/DeliveryCard';
import HeaderViewAll from '../components/HeaderViewAll';
import MediumInfoCard from '../components/MediumInfoCard';

import Pizzas from '../data/pizzas.json';
import InfoCardsList from '../components/InfoCardsList';

const DetailsScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <DeliveryCard />
      <HeaderViewAll
        title="Recommended"
        secTitle="Based on your purchase story"
      />
      <MediumInfoCard data={Pizzas[0]} />
      <HeaderViewAll title="Menu" secTitle="What is on our menu " />
      <InfoCardsList data={Pizzas.slice(0, 4)} navigation={navigation} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    backgroundColor: 'white',
    height: '100%',
    flex: 1,
  },
});

export default DetailsScreen;
