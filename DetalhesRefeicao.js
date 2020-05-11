import React, { Component } from 'react';
import { Platform, StyleSheet, Text,Dimensions ,SafeAreaView, View, Image, FlatList, TextInput, TouchableWithoutFeedback, ViewBase } from 'react-native';
import TituloEImagemCardapio from './TituloEImagemCardapio';



export default class DetalhesRefeicao extends Component {

  constructor() {
    super();

    this.state = {
      imagemDoCardapio: require("./Imagens/comida.jpg"),
      titulo: '',
      text: '',
      quantidadeCaloria: ""
    }
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <TituloEImagemCardapio
          titulo={this.state.titulo}
          imagemDoCardapio={this.state.imagemDoCardapio}
          quantidadeCaloria={this.state.quantidadeCaloria}
        ></TituloEImagemCardapio>

        

      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  
});
