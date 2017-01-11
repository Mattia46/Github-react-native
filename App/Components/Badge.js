import { View, Image, Text } from 'react-native'
import styles from './BadgeCss';
import React, { Component } from 'react';

class Badge extends React.Component{
    render(){
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={{uri: this.props.userInfo.avatar_url}}/>
                <Text style={styles.name}> {this.props.userInfo.name} </Text>
                <Text style={styles.handle}> {this.props.userInfo.login} </Text>
            </View>
        )
    }
};

Badge.propTypes = {
  userInfo: React.PropTypes.object.isRequired
};

export default Badge;
