import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';
import Stars from 'react-native-stars';
import ChoiceList from './ChoiceList';
import { Button } from 'react-native-elements';

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
          starSize={14}
          fullStar={require('../images/starFilled.png')}
          emptyStar={require('../images/starEmpty.png')}
        />
      </View>
      <View style={styles.list}>
        <ChoiceList data={data.sizes} title="Sizes" />
      </View>
      <View style={styles.buttons}>
        <View>
          <Button
            titleStyle={{ color: 'black', fontSize: 13 }}
            buttonStyle={styles.customizeBtn}
            color="#e5e5e5"
            title="Customize & Add"
          />
        </View>
        <View>
          <Button
            titleStyle={{ color: 'white', fontSize: 13 }}
            color="red"
            title="Add To Card"
            buttonStyle={styles.addBtn}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
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
    height: 230,
  },
  star: {
    alignSelf: 'flex-start',
  },

  img: { height: 210, flex: 1, width: null, borderRadius: 15 },
  list: {
    marginLeft: 5,
  },
  customizeBtn: {
    backgroundColor: '#e5e5e5',
    borderRadius: 10,
    marginBottom: 10,
  },
  addBtn: {
    backgroundColor: 'red',
    borderRadius: 10,
    // marginVertical: 10,
  },
});

export default MediumInfoCard;
