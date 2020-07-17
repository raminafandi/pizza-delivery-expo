import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';

const CardScreen = ({}) => {
  //   const pressHandler = () => {
  //     navigation.navigate('Details', {});
  //   };
  return (
    <View style={styles.container}>
      <Text>Card Screen</Text>
    </View>
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

export default CardScreen;
