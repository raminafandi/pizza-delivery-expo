import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';

const DeliveryCard = ({}) => {
  return (
    <View style={styles.container}>
      <View style={styles.deliveryInfo}>
        <View style={styles.deliveryTextContainer}>
          <FontAwesome name="map-marker" size={18} color="red" />
          <Text style={styles.deliveryText}> DELIVERY</Text>
        </View>
        <Text style={styles.deliveryCity}>Baku, Azerbaijan</Text>
      </View>
      <View style={styles.iconContainer}>
        <Image
          style={styles.icon}
          source={{
            uri:
              'https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png',
          }}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  deliveryInfo: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
  },
  deliveryTextContainer: {
    flexDirection: 'row',
  },

  deliveryText: {
    color: 'red',
  },
  deliveryCity: {
    fontSize: 18,
  },
  iconContainer: {
    alignSelf: 'flex-end',
  },
  icon: {
    width: 40,
    height: 40,
  },
});

export default DeliveryCard;
