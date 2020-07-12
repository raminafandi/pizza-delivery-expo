import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

import InfoCard from './InfoCard';

const InfoCardsList = ({ data, navigation }) => {
  return (
    <FlatList
      numColumns={2}
      data={data}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Details', item);
          }}>
          <InfoCard data={item} />
        </TouchableOpacity>
      )}
    />
  );
};
export default InfoCardsList;
