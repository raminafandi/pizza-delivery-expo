import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import ChoiceCard from '../components/ChoiceCard';
import InfoCard from './InfoCard';

const ChoiceList = ({ navigation, title, navparam }) => {
  return (
    <View>
      <Text style={styles.header}>{title}</Text>
      <FlatList
        horizontal
        data={navigation.getParam(navparam)}
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
    marginLeft: 20,
    marginVertical: 20,
  },
  header: {
    fontSize: 17,
    marginLeft: 20,
  },
});

export default ChoiceList;
