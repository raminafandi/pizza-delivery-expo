import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ItemAddedToCart = ({ data }) => {
  return (
    <View style={styles.container}>
      {/* <View style={styles.total}>

      </View>
       */}
      <View style={{ borderWidth: 1, borderColor: 'green' }}>
        <Image style={styles.img} source={{ uri: data.imgSmall }} />
      </View>
      <View style={styles.textPart}>
        <View>
          <Text style={styles.text}>{data.name}</Text>
        </View>
        <View>
          <Text style={styles.price}>{data.sizes[0].price} manat</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // width: '100%',
    paddingHorizontal: 10,
    marginBottom: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'red',
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 20,
    alignSelf: 'flex-start',
    // marginBottom: 5,
  },
  textPart: {
    flexDirection: 'column',

    // flexWrap: 'wrap',
  },
  text: {
    marginLeft: 5,
    fontWeight: 'bold',
    fontSize: 16,
    flex: 1,
    // textAlign: 'left',
    // alignSelf: 'center',
    // textAlign: 'center',
  },
  price: {
    marginLeft: 5,
    fontSize: 13,
    color: 'grey',
    // justifyContent: 'flex-start',
    // alignSelf: 'flex-start',
    // textAlign: 'center',
  },
});

export default ItemAddedToCart;
