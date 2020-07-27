import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  Image,
  TouchableOpacity,
  Share,
} from 'react-native';

import {
  Feather,
  FontAwesome5,
  Entypo,
  MaterialIcons,
} from '@expo/vector-icons';

const ProfileScreen = ({}) => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'Order your next meal at Pizza Delivery, Discounts for new customers',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
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
      <View style={styles.moneyInfoContainer}>
        <View style={styles.moneyInfo}>
          <Text style={styles.moneyText1}>$140.00</Text>
          <Text style={styles.moneyText2}>Wallet</Text>
        </View>
        <View style={styles.moneyInfo}>
          <Text style={styles.moneyText1}>12</Text>
          <Text style={styles.moneyText2}>Orders</Text>
        </View>
      </View>
      <View>
        <TouchableOpacity>
          <View style={styles.option}>
            <MaterialIcons name="favorite-border" size={20} color="red" />
            <Text style={styles.optionText}>Your Favorites</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.option}>
            <MaterialIcons name="payment" size={20} color="red" />
            <Text style={styles.optionText}>Payment</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={onShare}>
          <View style={styles.option}>
            <FontAwesome5 name="user-friends" size={16} color="red" />
            <Text style={styles.optionText}>Tell Your Friend</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.option}>
            <Entypo name="price-tag" size={20} color="red" />
            <Text style={styles.optionText}>Promotions</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.option}>
            <MaterialIcons name="settings" size={20} color="red" />
            <Text style={styles.optionText}>Settings</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity>
          <View style={styles.logout}>
            <MaterialIcons name="power-settings-new" size={20} color="blue" />
            <Text style={styles.logoutText}>Log Out</Text>
          </View>
        </TouchableOpacity>
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
  moneyInfoContainer: {
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap',
  },
  moneyInfo: {
    borderWidth: 1,
    borderColor: 'silver',
    width: '50%',
    padding: 20,
    alignItems: 'center',
  },
  moneyText1: {
    color: 'red',
    fontSize: 21,
  },
  moneyText2: {
    color: 'grey',
  },
  option: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  optionText: {
    paddingLeft: 10,
    fontSize: 15,
  },
  logout: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 10,
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: 'silver',
    bottom: 0,
  },

  logoutText: {
    paddingLeft: 10,
    fontSize: 15,
    color: 'blue',
  },
});

export default ProfileScreen;
