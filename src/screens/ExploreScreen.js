import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';

const ExploreScreen = ({}) => {
  //   const pressHandler = () => {
  //     navigation.navigate('Details', {});
  //   };
  return (
    // <ScrollView>
    <View style={styles.container}>
      <Text>Explore</Text>
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

export default ExploreScreen;
