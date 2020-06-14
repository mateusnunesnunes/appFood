import React, { Component } from 'react';
import { Platform, StyleSheet, Text,Dimensions ,SafeAreaView, View, Image, FlatList, TextInput, TouchableWithoutFeedback, ViewBase } from 'react-native';
import TituloEImagemCardapio from './TituloEImagemCardapio';
import RefeicaoManha from './RefeicaoManha';
import RefeicaoNoite from './RefeicaoNoite';
import RefeicaoTarde from './RefeicaoTarde';

export default class DetalhesRefeicao extends Component {

  constructor() {
    super();

    this.state = {
      imagemDoCardapio: require("./src/Imagens/comida.jpg"),
      titulo: '',
      text: '',
      quantidadeCaloria: ""
    }
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <TituloEImagemCardapio
          titulo={this.props.route.params.titulo}
          imagemDoCardapio={this.state.imagemDoCardapio}
          quantidadeCaloria={this.props.route.params.quantidadeCaloriaRefeicao}
        ></TituloEImagemCardapio>
        {this.props.route.params.titulo === "Manhã" &&
          <View style={{ top: "5%",width: "100%",height:"100%", backgroundColor: "white" }}>
              <RefeicaoManha></RefeicaoManha>
          </View>
        }
        {this.props.route.params.titulo === "Tarde" &&
          <View style={{ top: "5%",width: "100%",height:"100%", backgroundColor: "white" }}>
            <RefeicaoTarde></RefeicaoTarde>
          </View>
        }
        {this.props.route.params.titulo === "Noite" &&
          <View style={{ top: "5%",width: "100%",height:"100%", backgroundColor: "white" }}>
              <RefeicaoNoite></RefeicaoNoite>
          </View>
        }
        

      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  
});