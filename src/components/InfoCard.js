import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const InfoCard = ({ data }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{ uri: data.imgSmall }} />
      <Text style={styles.text}>{data.name}</Text>
      <Text style={styles.price}>Starts from {data.sizes[0].price} manat</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    margin: 15,
    marginLeft: 20,
    marginRight: 20,
    width: '40%',
  },
  img: {
    width: 160,
    height: 160,
    borderRadius: 20,
    marginBottom: 5,
  },
  text: {
    marginLeft: 5,
    fontWeight: 'bold',
    fontSize: 16,
    flex: 1,
    textAlign: 'left',
    // textAlign: 'center',
  },
  price: {
    marginLeft: 5,
    fontSize: 13,
    color: 'grey',
  },
});

export default InfoCard;
