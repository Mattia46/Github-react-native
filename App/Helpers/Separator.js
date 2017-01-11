import { View, StyleSheet } from 'react-native';
import React, { Component } from 'react';

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: '#E4E4E4',
    flex: 1,
    marginLeft: 10,
    marginRight: 10
  },
});

class Separator extends React.Component{
  render(){
    return (
      <View style={styles.separator} />
    );
  }
};

export default Separator;
