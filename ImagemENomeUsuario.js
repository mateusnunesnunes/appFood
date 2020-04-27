import React, {Component} from 'react';
import {Platform, StyleSheet, Text, SafeAreaView,View,Image,FlatList,TextInput, TouchableWithoutFeedback, ViewBase} from 'react-native';

export default class ImagemENomeUsuario extends Component{

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
        <View style={{justifyContent: 'center',alignItems: 'center',height:"45%",backgroundColor:'#52FFBA'}}>
          <Image 
              source={require('./Imagens/comida.jpg')}  
              style={{width:180,height:180,borderRadius: 180/ 2}} 
          />
          <Text style={this.nomeUsuario}>Nome do usuario</Text>
          <View style={{ flexDirection: 'row',flexWrap: 'wrap',}}>
            <Text style={this.descricacaoUsuario}>25 anos, </Text>
            <Text style={this.descricacaoUsuario}>78 Kilos</Text>
          </View>
        </View>
      );
  }
}
const styles = StyleSheet.create({
  imagem:{
    width:180,height:180,borderRadius: 180/ 2
  },
  nomeUsuario:{
    fontWeight: 'bold',
    fontSize: 18
  },
  descricacaoUsuario:{
    fontSize: 14
  }
});
