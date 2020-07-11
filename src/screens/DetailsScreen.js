import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  Image,
  ImageBackground,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import ChoiceList from '../components/ChoiceList';

const DetailsScreen = ({ navigation }) => {
  const pressHandler = () => {
    navigation.goBack();
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <ImageBackground
          style={styles.img}
          imageStyle={{
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}
          source={{
            uri: 'https://wallpaperaccess.com/full/1184035.jpg',
          }}>
          <Ionicons
            name="ios-arrow-round-back"
            size={50}
            style={styles.goBackIcon}
            onPress={pressHandler}
          />
        </ImageBackground>
        <Text style={styles.pizzaName}>How you doin? Pizza</Text>
        <Text style={styles.pizzaInfo}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus
          est a quam tristique, sed rutrum nunc posuere. Donec in mauris lorem.
          Cras vitae venenatis.
        </Text>
        <View>
          <ChoiceList />
          <ChoiceList />
          <ChoiceList />
          <ChoiceList />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  goBackIcon: {
    alignSelf: 'flex-start',
    position: 'relative',
    top: 30,
    left: 10,
    color: 'white',
  },

  img: {
    width: '100%',
    height: 380,
  },
  pizzaName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  pizzaInfo: {
    fontSize: 12,
    color: 'grey',
    marginLeft: 20,
    marginRight: 20,
  },
});

export default DetailsScreen;
