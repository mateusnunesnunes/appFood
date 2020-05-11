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

  loadFoods = () => {
    fetch('http://192.168.15.10:1337/foods/search/apple/1/50')
    .then(res => res.json() )
    .then(res => {
      this.setState({
        data:res.foods.food || []
      })
    })
  }

  componentDidMount(){
    this.loadFoods();
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
