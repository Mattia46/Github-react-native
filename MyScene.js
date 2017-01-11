import React, { Component, PropTypes } from 'react';
import { View, Text, Navigator, TouchableHighlight, StyleSheet } from 'react-native';

var styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center',
  }
});

export default class MyScene extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Text>Current Scene:</Text>
        </View>
    )
  }
}
