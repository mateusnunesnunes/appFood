import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,FlatList,TextInput} from 'react-native';
import DetalhesCardapio from './DetalhesCardapio';
import DetalhesDiaDoCardapio from './DetalhesDiaDoCardapio';
import DetalhesRefeicao from './DetalhesRefeicao';

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
      <DetalhesCardapio></DetalhesCardapio>
    );
  }
}
const styles = StyleSheet.create({
  input:{
    marginTop:50,
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1,
    width:'70%',
    borderRadius:5,
    paddingLeft:5,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  containerIn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding:10,
    width:'100%',
    height:'50%'
  },
  h2text: {
    marginTop: 10,
    fontFamily: 'Helvetica',
    fontSize: 36,
    fontWeight: 'bold',
  },
  flatview: {
    justifyContent: 'center',
    paddingTop: 30,
    borderRadius: 2,
  },
  name: {
    fontFamily: 'Verdana',
    fontSize: 18
  },
  email: {
    color: 'red'
  }
});
