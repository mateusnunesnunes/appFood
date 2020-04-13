import React, {Component} from 'react';
import {Platform, StyleSheet, Text, SafeAreaView,View,Image,FlatList,TextInput, TouchableWithoutFeedback, ViewBase} from 'react-native';
import ImagemENomeUsuario from "./ImagemENomeUsuario";
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
          <ImagemENomeUsuario></ImagemENomeUsuario>
      );
  }
}
const styles = StyleSheet.create({
  
  
});
