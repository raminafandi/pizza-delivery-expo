import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import Datas from '../data/openingscreen.json';

import Carousel from 'react-native-snap-carousel';

const horizontalMargin = 20;
const slideWidth = 280;

const sliderWidth = Dimensions.get('window').width;
const itemWidth = slideWidth + horizontalMargin * 2;

import { Button } from 'react-native-elements';

const SignManagementScreen = ({}) => {
  return (
    <View style={styles.container}>
      <View style={styles.carousel}>
        <Carousel
          data={Datas}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          loop
          renderItem={({ item }) => (
            <View style={styles}>
              <Image style={styles.image} source={{ uri: item.img }} />
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.info}>{item.info}</Text>
            </View>
          )}
        />
      </View>
      <View style={styles.bottomPart}>
        <Button
          titleStyle={{ color: 'white', fontSize: 13 }}
          buttonStyle={[styles.customizeBtn, { backgroundColor: '#4267B2' }]}
          title="Sign Up with Facebook"
        />
        <Button
          titleStyle={{ color: 'white', fontSize: 13 }}
          buttonStyle={[styles.customizeBtn, { backgroundColor: '#DB4437' }]}
          title="Sign Up with Google"
        />
        <Text style={{ textAlign: 'center' }}>or</Text>
        <Button
          titleStyle={{ color: 'white', fontSize: 13 }}
          buttonStyle={[styles.customizeBtn, { backgroundColor: '#F4B400' }]}
          title="Sign Up with Email"
        />
        <View style={styles.loginContainer}>
          <Text style={{ color: 'grey' }}>Existing User ?</Text>
          <TouchableOpacity>
            <Text style={{ color: 'red' }}>Login Now</Text>
          </TouchableOpacity>
        </View>
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
  carousel: {
    height: '65%',
  },
  bottomPart: {
    marginTop: 20,
    marginHorizontal: 80,
  },
  customizeBtn: {
    borderRadius: 10,
    marginVertical: 5,
  },
  loginContainer: {
    marginVertical: 10,
    marginHorizontal: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  image: {
    width: 320,
    height: 320,
    borderRadius: 25,
  },
  title: {
    marginVertical: 13,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  info: {
    textAlign: 'justify',
    fontSize: 13,
    color: 'grey',
  },
});

export default SignManagementScreen;
