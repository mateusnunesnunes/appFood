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

  loadFoods = (params) => {
    fetch('http://127.0.0.1:1337/foods/search/'+params+'/1/25').then(res => res.json() )
    .then(res => {
      this.setState({
        data:res.foods.food || []
      })
    })
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