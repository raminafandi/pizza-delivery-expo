import React from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';

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
