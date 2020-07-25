import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { Button } from 'react-native-elements';

import ItemAddedToCart from '../components/ItemAddedToCart';
import { FlatList } from 'react-native-gesture-handler';

import Pizzas from '../data/pizzas.json';

const CartScreen = ({}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={Pizzas.slice(0, 3)}
        keyExtractor={(item, index) => item.id.toString()}
        renderItem={({ item }) => <ItemAddedToCart data={item} />}
      />
      <View style={styles.total}>
        <View style={{ flexDirection: 'row' }}>
          <View>
            <Text style={styles.totalTxt}>Total: </Text>
          </View>
          <View>
            <Text style={styles.price}>150.90$</Text>
          </View>
        </View>
        <Button
          titleStyle={{ color: 'white', fontSize: 13 }}
          buttonStyle={[styles.customizeBtn, { backgroundColor: '#F4B400' }]}
          title="Pay'n Go"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: 'white',
    flex: 1,
  },
  total: {
    flex: 1,
    height: '10%',
    width: '100%',
    flexDirection: 'row',
    position: 'absolute', //Here is the trick
    bottom: 0, //Here is the trick
    backgroundColor: 'red',
    justifyContent: 'space-between',
  },
  totalTxt: {
    fontSize: 20,
    paddingVertical: 15,
    paddingLeft: 15,
    color: 'white',
  },
  price: {
    fontSize: 25,
    padding: 10,
    color: 'white',
  },
  customizeBtn: {
    alignSelf: 'center',
    paddingHorizontal: 50,
    paddingVertical: 13,
    marginTop: 6,
    marginRight: 6,
  },
});

export default CartScreen;
