import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';

import { SearchBar } from 'react-native-elements';

import HeaderViewAll from '../components/HeaderViewAll';
import InfoCard from '../components/InfoCard';

import Pizzas from '../data/pizzas.json';
import { FlatList } from 'react-native-gesture-handler';

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
        <FlatList
          horizontal
          data={Pizzas}
          keyExtractor={(item, index) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.container}>
              <InfoCard data={item} />
            </View>
          )}
        />
        {/* <InfoList data={Pizzas.slice(0, 4)} /> */}
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
  menuContainer: {},
});

export default ExploreScreen;
