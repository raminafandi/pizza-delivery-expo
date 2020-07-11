import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ChoiceCard = () => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.text}>Standard</Text>
        <Text style={styles.price}>450$</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 18,
    paddingTop: 5,
    paddingBottom: 5,
    borderWidth: 1,
    borderColor: 'red',
    justifyContent: 'space-evenly',
    marginRight: '3%',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 12,
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
  },

  price: {
    fontWeight: 'bold',
    fontSize: 12,
    justifyContent: 'flex-end',
  },
});

export default ChoiceCard;
