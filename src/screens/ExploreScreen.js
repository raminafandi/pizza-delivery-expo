import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';

import { SearchBar } from 'react-native-elements';

import DeliveryCard from '../components/DeliveryCard';
import HeaderViewAll from '../components/HeaderViewAll';
import MediumInfoCard from '../components/MediumInfoCard';
import InfoCard from '../components/InfoCard';

import Pizzas from '../data/pizzas.json';
import InfoCardsList from '../components/InfoCardsList';

const ExploreScreen = ({}) => {
  const [search, updateSearch] = useState('');

  //   const pressHandler = () => {
  //     navigation.navigate('Details', {});
  //   };
  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Search in our menu..."
        onChangeText={updateSearch}
        value={search}
        containerStyle={{ backgroundColor: 'red', borderRadius: 15 }}
        inputContainerStyle={{ backgroundColor: 'white', borderRadius: 15 }}
        lightTheme
      />
      <HeaderViewAll title="New" secTitle="All new, all different!" />
      <View style={styles.menuContainer}>
        <InfoCardsList data={Pizzas.slice(0, 4)} />
      </View>
    </View>
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
    // fle
  },
  infocard1: {
    alignSelf: 'flex-start',
  },
  infocard2: {
    alignSelf: 'flex-end',
  },
});

export default ExploreScreen;
