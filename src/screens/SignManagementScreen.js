import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import { Button } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SignManagementScreen = ({}) => {
  return (
    <View style={styles.container}>
      <View style={styles.carousel}>
        <Text>Carousel View Thing</Text>
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
          title="Sign Up with Google"
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
    backgroundColor: 'white',
    flex: 1,
  },
  carousel: {
    backgroundColor: 'red',
    height: '60%',
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
});

export default SignManagementScreen;
