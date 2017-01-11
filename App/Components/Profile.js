import React, { Component } from 'react';
import Badge from './Badge';
import styles from './ProfileCss';
import { View, ScrollView, Text } from 'react-native';
import Separator from './../Helpers/Separator';

class Profile extends Component {
  getRowTitle(user, item){
      item = (item === 'public_repos') ? item.replace('_', ' ') : item;
      return item[0] ? item[0].toUpperCase() + item.slice(1) : item;
  }

  render(){
    var userInfo = this.props.userInfo;
    var attributes = ['company', 'location', 'followers', 'following', 'email', 'bio', 'public_repos'];
    var list = attributes.map((item, index) => {
      if(!userInfo[item]){
        return <View key={index} />
      } else {
        console.log('itrem', item, index, userInfo[item], userInfo)
        return (
          <View>
            <View style={styles.rowContent}>
              <Text style={styles.rowTitle}> { this.getRowTitle(userInfo, item) } </Text>
              <Text style={styles.rowContent}> { userInfo[item] } </Text>
            </View>
            <Separator />
          </View>
        )
      }
    })
    return(
      <ScrollView style={styles.container}>
        <Badge userInfo={this.props.userInfo} />
        { list }
        </ScrollView>
    )
  }
}

export default Profile
