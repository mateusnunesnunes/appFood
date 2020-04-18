import React, { Component } from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, SafeAreaView, View, Image, FlatList, TextInput, TouchableWithoutFeedback, ViewBase } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TituloEImagemCardapio from './TituloEImagemCardapio';
import DetalhesCelula from './DetalhesCelula.js';

export default class DetalhesCardapio extends Component {

  constructor() {
    super();
    this.state = {
      data: [
        { id: "00", diaDaSemana: "Segunda-Feira", descricao: "Frango com batatas fritas onduladas e salada", imagemCelula: require("./Imagens/comida.jpg") },
        { id: "01", diaDaSemana: "Terça-Feira", descricao: "Frango com batatas fritas onduladas e salada", imagemCelula: require("./Imagens/comida.jpg") },
        { id: "02", diaDaSemana: "Quarta-Feira", descricao: "Frango com batatas fritas onduladas e salada", imagemCelula: require("./Imagens/comida.jpg") },
        { id: "03", diaDaSemana: "Quinta-Feira", descricao: "Frango com batatas fritas onduladas e salada", imagemCelula: require("./Imagens/comida.jpg") },
        { id: "04", diaDaSemana: "Sexta-Feira", descricao: "Frango com batatas fritas onduladas e salada", imagemCelula: require("./Imagens/comida.jpg") },
      ],
      imagemDoCardapio: require("./Imagens/comida.jpg"),
      titulo: 'Titulo',
      text: ''
    }

  }

  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView style={{ backgroundColor: "white" }}>
        <TituloEImagemCardapio
          titulo={this.state.titulo}
          imagemDoCardapio={this.state.imagemDoCardapio}
        ></TituloEImagemCardapio>
        <FlatList
          data={this.state.data}
          keyExtractor={item => item.id}
          style={{ top: "80%", paddingBottom: 5, backgroundColor: "white", marginBottom: 30 }}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity style={{ flex: 1, backgroundColor: "white" }} onPress={() => navigation.navigate("DetalhesDiaDoCardapio")} >
                <View style={{ flex: 1, paddingBottom: 7, backgroundColor: "white" }}>
                  <DetalhesCelula
                    diaDaSemana={item.diaDaSemana}
                    descricao={item.descricao}
                    imagemCelula={item.imagemCelula}
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

