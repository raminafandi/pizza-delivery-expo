import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HeaderViewAll = ({}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSide}>
        <Text style={styles.headerText}>Recommended</Text>
        <Text style={styles.basedOn}>Based on your purchase story</Text>
      </View>
      <View style={styles.rightSide}>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    padding: 10,
    // borderWidth: 1,
    // borderColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  leftSide: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
  },
  rightSide: {
    flexDirection: 'column',
    alignSelf: 'center',
  },

  headerText: {
    color: 'black',
    fontWeight: '700',
    fontSize: 20,
  },
  basedOn: {
    color: 'grey',
    fontSize: 12,
  },
  viewAll: {
    color: 'red',
    fontWeight: '700',
  },
});

export default HeaderViewAll;
