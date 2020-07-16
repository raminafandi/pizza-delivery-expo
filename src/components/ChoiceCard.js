import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ChoiceCard = ({ item, index }) => {
  const [color, setColor] = useState('black');
  const [select, setSelect] = useState(-1);
  // console.log(index);
  if (item.price === 0) {
    item.price = 'Free';
  }
  return (
    <TouchableOpacity
      onPress={() => {
        // setColor('red');
        setSelect(index);
      }}>
      <View
        style={[
          styles.container,
          select == index ? { borderColor: 'red' } : { borderColor: 'black' },
        ]}>
        <Text style={styles.text}>{item.name}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    // flex: 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 5,
    paddingTop: 5,
    paddingBottom: 5,
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: 120,
    // marginRight: 0,
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
