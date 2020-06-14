import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {StyleSheet } from 'react-native';

export default class  Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={[styles.card,{height:this.props.height,width:this.props.width}]} >
                <Text style={styles.text}>{this.props.content}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({

  card:{
    alignItems: 'center',
    justifyContent:'center',
    margin: 20,
    backgroundColor:'white',
    borderRadius:6,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  text:{
    textAlign:'center',
    padding:5,
    margin:5,
    fontWeight:'normal',
    fontSize:13,
    alignItems: 'center',
    
  }


});