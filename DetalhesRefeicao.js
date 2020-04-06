import React, {Component} from 'react';
import {Platform, StyleSheet, Text, SafeAreaView,View,Image,FlatList,TextInput, TouchableWithoutFeedback, ViewBase} from 'react-native';
import TituloEImagemCardapio from './TituloEImagemCardapio';
import DetalhesCelula from './DetalhesCelula.js';

export default class DetalhesRefeicao extends Component{

  constructor(){
    super();

    this.state = {
      imagemDoCardapio: require("./Imagens/comida.jpg"),
      titulo:'Segunda-Feira',
      text: ''
    }
  }

  render() {
    return (
        <SafeAreaView style={{flex:1}}>
          <TituloEImagemCardapio
          titulo = {this.state.titulo}
          imagemDoCardapio = {this.state.imagemDoCardapio}
          ></TituloEImagemCardapio>
          
      </SafeAreaView>
      );
  }
}
const styles = StyleSheet.create({

});
