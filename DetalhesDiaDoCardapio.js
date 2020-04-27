import React, { Component } from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, SafeAreaView, View, Image, FlatList, TextInput, TouchableWithoutFeedback, ViewBase } from 'react-native';
import TituloEImagemCardapio from './TituloEImagemCardapio';
import DetalhesCelula from './DetalhesCelula.js';

export default class DetalhesDiaDoCardapio extends Component {

  constructor() {
    super();
    this.state = {
      data: [
      { id: "00", diaDaSemana: "Manhã", descricao: "Dieta baseada em frango", imagemCelula: require("./Imagens/comida.jpg"),calorias:500,base:"Frango"},
        { id: "01", diaDaSemana: "Tarde", descricao: "Dieta baseada em carne", imagemCelula: require("./Imagens/comida.jpg"),calorias:1000,base:"Carne"},
        { id: "02", diaDaSemana: "Noite", descricao: "Dieta baseada em peixe", imagemCelula: require("./Imagens/comida.jpg"),calorias:500,base:"Peixe"}
      ],
      imagemDoCardapio: require("./Imagens/comida.jpg"),
      titulo: 'Segunda-Feira',
      quantidadeCalorias:'2000',
      text: ''
    }
  }
  function() {
    alert("Clicado");
  }

  render() {
    return (
      <SafeAreaView style={{backgroundColor:"white"}}>
        <TituloEImagemCardapio
          titulo={this.state.titulo}
          imagemDoCardapio={this.state.imagemDoCardapio}
          quantidadeCaloria ={this.state.quantidadeCalorias}
        ></TituloEImagemCardapio>
        <FlatList
          data={this.state.data}
          keyExtractor={item => item.id}
          style={{ top: "70%", paddingBottom: 5,backgroundColor:"white",height:"60%" }}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity style={{ flex: 1,backgroundColor:"white" }} onPress={this.function} >
                <View style={{ flex: 1, justifyContent: 'center',alignItems: 'center',paddingBottom: 5,backgroundColor:"white",paddingTop:5  }}>
                  <DetalhesCelula
                    diaDaSemana={item.diaDaSemana}
                    descricao={item.descricao}
                    imagemCelula={item.imagemCelula}
                    calorias={item.calorias}
                    base={item.base}
                  >
                  </DetalhesCelula>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({

});
