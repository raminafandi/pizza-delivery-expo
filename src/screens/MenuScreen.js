import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';

import InfoCard from '../components/InfoCard';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Pizzas from '../data/pizzas.json';
import ChoiceList from '../components/ChoiceList';
import InfoCardsList from '../components/InfoCardsList';

const MenuScreen = ({ navigation }) => {
  const pressHandler = () => {
    navigation.navigate('Details', {});
  };
  return (
    // <ScrollView>
    <View style={styles.container}>
      <InfoCardsList data={Pizzas} navigation={navigation} />
    </View>
    // </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
});

export default MenuScreen;
