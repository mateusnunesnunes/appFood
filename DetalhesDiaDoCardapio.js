import React, { Component } from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, SafeAreaView, View, Image, FlatList, TextInput, TouchableWithoutFeedback, ViewBase } from 'react-native';
import TituloEImagemCardapio from './TituloEImagemCardapio';
import DetalhesCelula from './DetalhesCelula.js';

export default class DetalhesDiaDoCardapio extends Component {

  constructor() {
    super();
    this.state = {
      data: [
      { id: "00", diaDaSemana: "Manhã", descricao: "Dieta baseada em frango", imagemCelula: require("./src/Imagens/garfoEColher.jpg"),calorias:500,base:"Frango"},
        { id: "01", diaDaSemana: "Tarde", descricao: "Dieta baseada em carne", imagemCelula: require("./src/Imagens/garfoEColher.jpg"),calorias:1000,base:"Carne"},
        { id: "02", diaDaSemana: "Noite", descricao: "Dieta baseada em peixe", imagemCelula: require("./src/Imagens/garfoEColher.jpg"),calorias:500,base:"Peixe"}
      ],
      imagemDoCardapio: require("./src/Imagens/comida.jpg"),
      titulo: 'Segunda-Feira',
      quantidadeCalorias:'2000',
      text: ''
    }
  }
/*.getParam("diaDaSemana")
const titulo = navigation.getParam("diaDaSemana","AAAAAAAA");
onPress={() => navigation.navigate("DetalhesRefeicao")}
*/ 

  render() {
    const { navigation } = this.props;
    const titulo = this.props.route.params.diaDaSemana
    return (
      <SafeAreaView style={{backgroundColor:"white"}}>
        <TituloEImagemCardapio
          titulo={this.props.route.params.titulo}
          imagemDoCardapio={this.state.imagemDoCardapio}
          quantidadeCaloria ={this.props.route.params.caloriasCardapio}
        ></TituloEImagemCardapio>
        <FlatList
          data={this.state.data}
          keyExtractor={item => item.id}
          style={{ top: "5%", paddingBottom: 5,backgroundColor:"white",height:"60%" }}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity style={{ flex: 1,backgroundColor:"white" }} onPress={() => navigation.navigate("DetalhesRefeicao",{titulo:item.diaDaSemana,quantidadeCaloriaRefeicao:item.calorias})}  >
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