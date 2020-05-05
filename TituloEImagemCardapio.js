import React, { Component } from 'react';
import { Platform, StyleSheet, Text, SafeAreaView, View, Image, FlatList, TextInput, TouchableWithoutFeedback, ViewBase } from 'react-native';


export default class TituloEImagemCardapio extends Component {

  constructor() {
    super();
    this.state = {
      data: [],
      imagem: "",
      titulo: "",
      text: ''
    }
  }

  render() {
    return (
      <View style={styles.viewInicial}>
        <View style={styles.viewImagemDoCardapio}>
          <Image style={styles.imagemDoCardapio} source={this.props.imagemDoCardapio}></Image>
        </View>
        <Text style={styles.tituloDoCardapio}>{this.props.titulo}</Text>
        <Text style={styles.quantidadeCaloria}>{this.props.quantidadeCaloria + " Kcal"}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  viewInicial: {
    backgroundColor: 'white',
    top: "5%",
    left: 0,
    height: "40%",
    width: "100%",
    right: 0,
    bottom: 40,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewImagemDoCardapio: {
    height: '90%',
    width: '100%'
  },
  imagemDoCardapio: {
    height: '100%',
    width: '100%',
    borderRadius: 8,
  },
  tituloDoCardapio: {
    fontSize: 17,
  },
  quantidadeCaloria: {
    color: '#52FFBA',
    fontSize: 17,
  },
});
