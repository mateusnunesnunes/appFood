import React, { Component } from 'react';
import { Platform, StyleSheet, Text, TouchableHighlight, SafeAreaView, View, Image, FlatList, TextInput, TouchableWithoutFeedback, ViewBase } from 'react-native';
import CelulaDetalhesCardapio from './CelulaDetalhesCardapio';


export default class DetalhesCardapio extends Component {

  constructor() {
    super();
    this.state = {
      data: [],
      imagem: "",
      titulo: "",
      text: ''
    }
  }

  pesquisar() {
    alert("Clicado pesquisar");
    
  }

  //"#52FFBA"

  render() {
    return (
      <View style={styles.viewInicial}>

        <View style={{ position:"absolute",flex: 1, top: 30, left: 19, alignItems: "center", height: "90%", width: "90%", paddingBottom: 5 }}>
          <Image style={{ height: "100%", width: "90%", borderRadius: 8 }} source={require("./Imagens/comida.jpg")}></Image>
        </View>
        <CelulaDetalhesCardapio
          titulo={"Tópico semana 1"}
          base={"Semana 1"}
          caloriasTotais={"14.000"}
        ></CelulaDetalhesCardapio>
      </View>

    );
  }
}
const styles = StyleSheet.create({
  viewInicial: {
    backgroundColor: "#52FFBA",
    top: 0,
    left: 0,
    height: "55%",
    width: "100%",
    right: 0,
    bottom: 0,
    borderRadius: 10,
    marginBottom: 5
  },
  ImageBackground: {
    height: "90%",
    width: "95%",
    borderRadius: 8
  }
});
