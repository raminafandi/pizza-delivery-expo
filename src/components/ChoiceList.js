import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import ChoiceCard from '../components/ChoiceCard';

const ChoiceList = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>Sizes</Text>
      </View>
      <View style={styles.choices}>
        <ChoiceCard />
        <ChoiceCard />
        <ChoiceCard />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
  },
  choices: {
    flex: 3,
    flexDirection: 'row',
    marginHorizontal: 20,
    alignItems: 'flex-start',
    marginVertical: 8,
    justifyContent: 'space-between',
  },
  header: {
    fontSize: 17,
    marginLeft: 20,
  },
});

export default ChoiceList;
