import React, {Component} from 'react';

import {Platform, StyleSheet, Text, View,Image,FlatList,TextInput, StatusBar} from 'react-native';
import Routes from './src/routes/routes';

export default class App extends Component{

  constructor(){
    super();
    this.state = {
      data:[],
      text: '',
      logado: false
    }
  }


  render() {
    return (
      <Routes />
     
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
   
});
