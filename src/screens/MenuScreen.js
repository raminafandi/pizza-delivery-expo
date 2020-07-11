import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';

import InfoCard from '../components/InfoCard';
import { TouchableOpacity } from 'react-native-gesture-handler';

const MenuScreen = ({ navigation }) => {
  const pressHandler = () => {
    navigation.navigate('Details', {});
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity onPress={pressHandler}>
          <InfoCard />
        </TouchableOpacity>
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
      </View>
    </ScrollView>
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
