import React, { Component } from 'react';
import Main from './App/Components/Main';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  Navigator,
  Image
} from 'react-native';

var styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'red'
  },
});

class Github extends Component {
  render() {
    return (
      <NavigatorIOS style={styles.container}
      initialRoute={{ title: 'github', component: Main }}
      //renderScene={(route, navigator) => <Main /> }
      />
    )
  }
}
AppRegistry.registerComponent('Github', () => Github);

console.disableYellowBox = true;
