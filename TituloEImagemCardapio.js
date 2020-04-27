import React, { Component } from 'react';
import { Platform, StyleSheet, Text, SafeAreaView, View, Image, FlatList, TextInput, TouchableWithoutFeedback, ViewBase } from 'react-native';

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

  render() {
    return (
      <View style={styles.viewInicial}>
        <View style={styles.viewImagemDoCardapio}>
          <Image style={styles.imagemDoCardapio} source={this.props.imagemDoCardapio}></Image>
        </View>
        <Text style={styles.tituloDoCardapio}>{this.props.titulo}</Text>
        <Text style={styles.quantidadeCaloria}>{this.props.quantidadeCaloria + "Kcal"}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  viewInicial: {
    position: "absolute",
    backgroundColor: 'white',
    top: 0,
    left: 0,
    height: "65%",
    width: "100%",
    right: 0,
    bottom: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewImagemDoCardapio: {
    height: '90%',
    width: '100%',
    borderRadius: 7,
    backgroundColor: 'white',
    
  },
  imagemDoCardapio: {
    height: '100%',
    width: '100%',
  },
  tituloDoCardapio: {
    fontSize: 19,
  },
  quantidadeCaloria: {
    color: '#52FFBA',
    fontSize: 17,
  },
});
