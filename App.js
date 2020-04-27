import React, {Component} from 'react';

import {Platform, StyleSheet, Text, View,Image,FlatList,TextInput, StatusBar} from 'react-native';
import DetalhesCardapio from './DetalhesCardapio';
import DetalhesDiaDoCardapio from './DetalhesDiaDoCardapio';
import DetalhesRefeicao from './DetalhesRefeicao';
import PerfilDoUsuario from "./PerfilDoUsuario";
import Cadastro from './Cadastro';
import Routes from './src/routes/routes';


import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

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
    fetch('http://192.168.100.4:1337/foods/search/apple/1/50')
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
      <NavigationContainer>
        <StatusBar barStyle="light-content" />
        <Routes />
      </NavigationContainer>
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