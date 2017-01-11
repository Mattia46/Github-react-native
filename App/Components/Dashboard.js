import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import styles from './DashboardCss';
import api from './../Utils/api';
import Repos from './Repos';
import Profile from './Profile';

class Dashboard extends Component {
  goToProfile(){
    console.log('profile');
    this.props.navigator.push({
      title: this.props.userInfo.login,
      component: Profile,
      passProps: { userInfo: this.props.userInfo }
    })
  }

  goToRepos(){
    var repos = api.getRepos(this.props.userInfo.login)
      .then(repos => {
        this.props.navigator.push({
          title: this.props.userInfo.login || "Select an Option",
          component: Repos,
          passProps: {repos: repos, userInfo: this.props.userInfo}
        });
      })

  }

  makeBackground(btn){
    var obj = {
      flexDirection: 'row',
      alignSelf: 'stretch',
      justifyContent: 'center',
      flex: 1
    }
    if(btn === 0){
      obj.backgroundColor = '#48BBEC';
    } else if (btn === 1){
      obj.backgroundColor = '#E77AAE';
    } else {
      obj.backgroundColor = '#758BF4';
    }
    return obj;
  }

  render(){
    return (
      <View style={styles.container}>
        <Image source={{uri: this.props.userInfo.avatar_url}} style={styles.image} />
        <TouchableHighlight
      style={this.makeBackground(0)}
      onPress={this.goToProfile.bind(this)}
      underlayColor='green'>
        <Text style={styles.buttonText}> View profile </Text>
        </TouchableHighlight>
        <TouchableHighlight
      style={this.makeBackground(1)}
      onPress={this.goToRepos.bind(this)}
      underlayColor='green'>
        <Text style={styles.buttonText}> View Repos </Text>
        </TouchableHighlight>
        </View>
    )
  }
}

export default Dashboard;
