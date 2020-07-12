import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';

import ChoiceCard from '../components/ChoiceCard';
import InfoCard from './InfoCard';

const ChoiceList = () => {
  return (
    <FlatList horizontal>
      {/* <View>
        <Text style={styles.header}>Sizes</Text>
      </View> */}
      <View style={styles.choices}>
        <InfoCard />
      </View>
      {/* </View> */}
    </FlatList>
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
