/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
} from 'react-native';


import FlatGridList from 'react-native-flat-grid';

const LIST = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 }
];

export default () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={Styles.item}>
        <Text style={Styles.h1}>numColumns = 2</Text>
        <FlatGridList
          data={LIST}
          numColumns={2}
          renderItem={({ item, index }, itemStyle) => {
            return (
              <View style={itemStyle}>
                <Text>{item.id}</Text>
              </View>
            )
          }}
        />
      </View>

      <View style={Styles.item}>
        <Text style={Styles.h1}>numColumns = 3</Text>
        <FlatGridList
          data={LIST}
          numColumns={3}
          renderItem={({ item, index }, itemStyle) => {
            return (
              <View style={itemStyle}>
                <Text>{item.id}</Text>
              </View>
            )
          }}
        />
      </View>

      <View style={Styles.item}>
        <Text style={Styles.h1}>numColumns = 4</Text>
        <FlatGridList
          data={LIST}
          numColumns={4}
          renderItem={({ item, index }, itemStyle) => {
            return (
              <View style={itemStyle}>
                <Text>{item.id}</Text>
              </View>
            )
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  h1: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },

  item: {
    flex: 1,
    marginBottom: 10
  }
});