import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import DeliveryCard from '../components/DeliveryCard';
import HeaderViewAll from '../components/HeaderViewAll';
import MediumInfoCard from '../components/MediumInfoCard';

import Pizzas from '../data/pizzas.json';
import InfoCardsList from '../components/InfoCardsList';
import InfoCard from '../components/InfoCard';

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
      {/* <InfoCardsList data={Pizzas.slice(0, 4)} navigation={navigation} /> */}
      <View style={styles.menuContainer}>
        <View style={styles.infocard1}>
          <InfoCard data={Pizzas[0]} />
        </View>
        <View style={styles.infocard2}>
          <InfoCard data={Pizzas[1]} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    backgroundColor: 'white',
    // height: '100%',
    flex: 1,
  },
  menuContainer: {
    // flex: 3,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  infocard1: {
    alignSelf: 'flex-start',
  },
  infocard2: {
    alignSelf: 'flex-end',
  },
});

export default DetailsScreen;
