import React, {Component} from 'react';
import {Platform, StyleSheet, Text, SafeAreaView,View,Image,FlatList,TextInput, TouchableWithoutFeedback, ViewBase} from 'react-native';

export default class DetalhesCardapio extends Component{

  constructor(){
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
          <Text style={styles.tituloDoCardapio}>{this.props.titulo}</Text>
          <View style={styles.viewImagemDoCardapio}>
            <Image style={styles.imagemDoCardapio} source={this.props.imagemDoCardapio}></Image>
          </View>
        </View>
      );
  }
}
const styles = StyleSheet.create({
  viewInicial:{
    position: "absolute",
    backgroundColor: 'white', 
    top: 28, 
    left:1, 
    right: 0, 
    bottom: 40, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  viewImagemDoCardapio:{
    height: '90%', 
    width:'93%',
    borderRadius:7,
    backgroundColor: 'black',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imagemDoCardapio:{
    height: '100%', 
    width:'100%',
    borderRadius:7,
  },
  tituloDoCardapio:{
    fontWeight: 'bold',
    fontSize: 24,
  },
  
});
