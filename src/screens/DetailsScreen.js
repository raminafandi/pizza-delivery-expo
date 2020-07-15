import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  Image,
  ImageBackground,
  FlatList,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
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
            uri: navigation.getParam('imgBig'),
          }}>
          <View>
            <Ionicons
              name="ios-arrow-round-back"
              size={50}
              style={styles.goBackIcon}
              onPress={pressHandler}
            />
            <SimpleLineIcons
              name="basket"
              style={styles.addToCardIcon}
              size={40}
              color="white"
            />
          </View>
        </ImageBackground>
        <Text style={styles.pizzaName}>{navigation.getParam('name')}</Text>
        <Text style={styles.pizzaInfo}>{navigation.getParam('info')}</Text>
        <View style={styles.lists}>
          <ChoiceList data={navigation.getParam('sizes')} title="Sizes" />
          <ChoiceList data={navigation.getParam('crust')} title="Crust" />
          <ChoiceList data={navigation.getParam('toppings')} title="Toppings" />
        </View>
        <View style={styles.buttonView}>
          {/* <Button title="Add to Card" /> */}
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
    position: 'absolute',
    top: 30,
    left: 10,
    color: 'white',
  },
  addToCardIcon: {
    alignSelf: 'flex-end',
    position: 'absolute',
    top: 33,
    right: 10,
    color: 'white',
  },
  lists: {
    marginLeft: 20,
  },
  img: {
    width: '100%',
    height: 380,
  },
  pizzaName: {
    marginTop: 20,
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
  buttonView: {
    position: 'absolute',
    // bottom: 20,
    width: '100%',
  },
});

export default DetailsScreen;
