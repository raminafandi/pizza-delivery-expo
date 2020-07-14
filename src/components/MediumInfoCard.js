import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';
import Stars from 'react-native-stars';

const MediumInfoCard = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgView}>
        <Image
          resizeMode={'cover'}
          style={styles.img}
          source={{ uri: data.imgBig }}
        />
      </View>

      <View style={styles.star}>
        <Text style={styles.pizzaName}>{data.name}</Text>
        <Stars
          display={4}
          spacing={8}
          count={5}
          starSize={20}
          fullStar={require('../images/starFilled.png')}
          emptyStar={require('../images/starEmpty.png')}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    margin: 15,
    backgroundColor: 'white',
    padding: 20,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
    borderRadius: 15,
  },

  pizzaName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
    marginLeft: 5,
    marginBottom: 5,
  },
  imgView: {
    flexDirection: 'row',
    height: 200,
  },
  star: {
    alignSelf: 'flex-start',
  },

  img: { height: 180, flex: 1, width: null, borderRadius: 15 },
});

export default MediumInfoCard;
