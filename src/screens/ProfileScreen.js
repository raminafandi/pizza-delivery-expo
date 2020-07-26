import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  Image,
} from 'react-native';

import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const ProfileScreen = ({}) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.profileInitialContainer}>
          <Image
            style={styles.profilePhoto}
            source={{
              uri:
                'https://bookingagentinfo.com/wp-content/uploads/2018/03/Barbara-Palvin-Contact-Information.jpg',
            }}
          />
          <View style={styles.profileNameContainer}>
            <Text style={styles.profileName}>Barbara Palvin</Text>
            <Text style={styles.profileType}>Gold Customer</Text>
          </View>
        </View>
        <View style={styles.profileInfoContainer}>
          <View style={styles.profileInfo}>
            <Feather name="phone" size={24} color="red" />
            <Text style={styles.textInfo}>(581)-307-6902</Text>
          </View>
          <View style={styles.profileInfo}>
            <MaterialIcons name="email" size={24} color="red" />
            <Text style={styles.textInfo}>barbara.palvin@gmail.com</Text>
          </View>
        </View>
      </View>
    </View>
    // </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingTop: 30,
  },

  profileContainer: {
    flexDirection: 'column',
  },
  profileInitialContainer: {
    flexDirection: 'row',
    padding: 20,
  },
  profilePhoto: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  profileNameContainer: {
    alignSelf: 'center',
    padding: 20,
  },
  profileName: {
    fontSize: 30,
  },
  profileType: {
    color: 'gold',
    fontSize: 15,
  },
  profileInfoContainer: {
    padding: 30,
  },
  profileInfo: {
    flexDirection: 'row',
  },
  textInfo: {
    paddingLeft: 20,
    fontSize: 15,
    color: 'grey',
  },
});

export default ProfileScreen;
