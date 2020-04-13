import React, {Component} from 'react';
import {StyleSheet,View, StatusBar, SafeAreaView, ScrollView} from 'react-native';
import statusLogin from './StatusLogin.js';
import Login from './Login';
import Cadastro from './Cadastro';

//import {NavigationContainer} from '@react-navigation/native';
//import {createStackNavigator} from '@react-navigation/stack';

export default class App extends Component{

  constructor(){
    super();
    this.state = {
      data:[],
      text: '',
      logado: false
    }
  }

  loadFoods = (params) => {
    fetch('http://127.0.0.1:1337/foods/search/'+params+'/1/25')
    .then(res => res.json() )
    .then(res => {
      this.setState({
        data:res.foods.food || []
      })
    })
  }

  render() {
    return (
      <Cadastro />
    );
  }
}
const styles = StyleSheet.create({
  
});
