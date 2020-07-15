import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import ChoiceCard from '../components/ChoiceCard';
import InfoCard from './InfoCard';

const ChoiceList = ({ data, title }) => {
  return (
    <View>
      <Text style={styles.header}>{title}</Text>
      <FlatList
        horizontal
        data={data}
        keyExtractor={(item, index) => item.name}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <ChoiceCard item={item} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    marginRight: 20,
    marginVertical: 20,
  },
  header: {
    fontSize: 17,
    // marginLeft: 20,
  },
});

export default ChoiceList;
