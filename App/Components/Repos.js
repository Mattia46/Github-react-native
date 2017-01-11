import React, { Component } from 'react';
import Badge from './Badge';
import Separator from './../Helpers/Separator';
import styles from './RepoCss';
import { View, Text, ScrollView, TouchableHighlight } from 'react-native';
import WebPage from './../Utils/WebPage';

class Repos extends Component {
  openPage(url){
    this.props.navigator.push({
      component: WebPage,
      title: 'Web View',
      passProps: {url}
    })
  }
  render(){
    var repos = this.props.repos;
    var list = repos.map((item, index) => {
      var desc = repos[index].description ? <Text style={styles.description}> {repos[index].description} </Text> : <View />;
      return (
        <View key={index}>
          <View style={styles.rowContainer}>
            <TouchableHighlight
              onPress={ this.openPage.bind(this, repos[index].html_url)}
              underlayColor='transparent'>
              <Text style={styles.name}>{repos[index].name}</Text>
            </TouchableHighlight>
            <Text style={ styles.stars }> Stars: {repos[index].stargazers_count} </Text>
            { desc }
          </View>
          <Separator />
        </View>
      );
    });
    return(
      <ScrollView>
        <Badge userInfo={this.props.userInfo} />
        { list }
      </ScrollView>
    )
  }
}

export default Repos;
