import React, {Component} from 'react';
import {Platform, StyleSheet, Text, SafeAreaView,View,Image,FlatList,TextInput, TouchableWithoutFeedback, ViewBase} from 'react-native';
import ImagemENomeUsuario from "./ImagemENomeUsuario";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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
        <View style={{flex:1}}>
          <ImagemENomeUsuario></ImagemENomeUsuario>
        </View>
      );
  }
}
const styles = StyleSheet.create({
  
  
});
