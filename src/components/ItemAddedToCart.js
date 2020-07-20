import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ItemAddedToCart = ({ data }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{ uri: data.imgSmall }} />
      <View style={styles.textPart}>
        <Text style={styles.text}>{data.name}</Text>
        <Text style={styles.price}>{data.sizes[0].price} manat</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 10,
    marginBottom: 10,
    // flex: 3,
    flexDirection: 'row',
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 12,
    // },
    // shadowOpacity: 0.58,
    // shadowRadius: 16.0,

    // elevation: 24,
    // justifyContent: '',
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 20,
    alignSelf: 'flex-start',
    // marginBottom: 5,
  },
  textPart: {
    alignSelf: 'flex-end',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  text: {
    marginLeft: 5,
    fontWeight: 'bold',
    fontSize: 16,
    flex: 1,
    // textAlign: 'left',
    alignSelf: 'center',
    // textAlign: 'center',
  },
  price: {
    marginLeft: 5,
    fontSize: 13,
    color: 'grey',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    textAlign: 'center',
  },
});

export default ItemAddedToCart;
