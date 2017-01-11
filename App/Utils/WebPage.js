import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollVieww, WebView } from 'react-native';

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6EF',
    flexDirection: 'column',
  },
});

class WebPage extends Component {
  render(){
    return (
      <View style={styles.container}>
        <WebView url={this.props.url} />
      </View>
    )
  }
}

WebPage.propTypes = {
  url: React.PropTypes.string.isRequired
}

export default WebPage;
