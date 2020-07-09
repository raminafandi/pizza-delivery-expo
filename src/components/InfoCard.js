import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const InfoCard = (info) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri:
            'https://pizzabruno.az/wp-content/uploads/2018/06/pizza-bruno-2-300x300.jpg',
        }}
      />
      <Text style={styles.text}>Margarita</Text>
      <Text style={styles.price}>Starts from 5 manat</Text>
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
    // textAlign: 'center',
  },
  price: {
    marginLeft: 5,
    fontSize: 13,
    color: 'grey',
  },
});

export default InfoCard;
