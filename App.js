import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,FlatList,TextInput} from 'react-native';
import DetalhesCardapio from './DetalhesCardapio';
import DetalhesDiaDoCardapio from './DetalhesDiaDoCardapio';
import DetalhesRefeicao from './DetalhesRefeicao';
import PerfilDoUsuario from "./PerfilDoUsuario";

export default class App extends Component{



  constructor(){
    super();
    this.state = {
      data:[],
      text: ''
    }
  }

  loadFoods = (params) => {
    fetch('http://192.168.0.103:1337/foods/search/'+params+'/1/25')
    .then(res => res.json() )
    .then(res => {
      this.setState({
        data:res.foods.food || []
      })
    })
  }
  //<DetalhesCardapio></DetalhesCardapio>
  // <DetalhesDiaDoCardapio></DetalhesDiaDoCardapio> - arrumar a imagem grande
  // <DetalhesRefeicao></DetalhesRefeicao> - em andamento
  render() {
    return (
      <DetalhesDiaDoCardapio></DetalhesDiaDoCardapio>
    );
  }
}

