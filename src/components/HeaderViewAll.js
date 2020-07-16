import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HeaderViewAll = ({ title, secTitle }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSide}>
        <Text style={styles.headerText}>{title}</Text>
        <Text style={styles.basedOn}>{secTitle}</Text>
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
    paddingHorizontal: 20,
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
