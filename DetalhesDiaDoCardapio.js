import React, {Component} from 'react';
import {Platform, StyleSheet, Text, SafeAreaView,View,Image,FlatList,TextInput, TouchableWithoutFeedback, ViewBase} from 'react-native';
import TituloEImagemCardapio from './TituloEImagemCardapio';
import DetalhesCelula from './DetalhesCelula.js';

export default class DetalhesDiaDoCardapio extends Component{

  constructor(){
    super();
    this.state = {
      data: [
        { id: "00", diaDaSemana: "Café da Manhã", descricao: "Frango com batatas fritas onduladas e salada", imagemCelula: require("./Imagens/comida.jpg") },
        { id: "01", diaDaSemana: "Almoço",descricao: "Frango com batatas fritas onduladas e salada", imagemCelula: require("./Imagens/comida.jpg") },
        { id: "02", diaDaSemana: "Janta",descricao: "Frango com batatas fritas onduladas e salada", imagemCelula: require("./Imagens/comida.jpg") }
      ],
      imagemDoCardapio: require("./Imagens/comida.jpg"),
      titulo:'Segunda-Feira',
      text: ''
    }
  }

  render() {
    return (
        <SafeAreaView >
          <TituloEImagemCardapio
          titulo = {this.state.titulo}
          imagemDoCardapio = {this.state.imagemDoCardapio}
          ></TituloEImagemCardapio>
          <FlatList
            data={this.state.data}
            keyExtractor={item => item.id}
            style={{top:"90%",paddingBottom:5}}
            renderItem={({ item }) => {
              return (
                <View style={{flex:1}}>
                  <DetalhesCelula
                    diaDaSemana = {item.diaDaSemana}
                    descricao = {item.descricao}
                    imagemCelula = {item.imagemCelula}
                  >
                  </DetalhesCelula>
                </View>
                  
              );
            }}
          />
      </SafeAreaView>
      );
  }
}
const styles = StyleSheet.create({

});
