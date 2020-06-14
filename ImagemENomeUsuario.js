import React, {Component} from 'react';
import {Platform, StyleSheet, Text, SafeAreaView,View,Image,FlatList,TextInput, TouchableWithoutFeedback, ViewBase} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

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

        
        <View style={{justifyContent: 'center',alignItems: 'center',height:"40%"}}>

          <LinearGradient
                    colors={['#52FFBA', 'transparent']}
                    style={{
                      position: 'absolute',
                      left: 0,
                      right: 0,
                      top: 0,
                      height: 400,
                    }}
                  />
 



          <Image 
              source={require('./Imagens/comida.jpg')}  
              style={{
                width:180,
                height:180,
                borderRadius: 180/ 2,
              shadowColor: "red",
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 0.32,
              shadowRadius: 5.46,
              elevation: 9,
              }} 
          />

          <View style={[styles.card,{height:20,padding: 20,marginBottom:60}]} >
              <Text style={styles.nomeUsuario}>{this.props.nome}</Text>
              <View style={{ flexDirection: 'row',flexWrap: 'wrap',}}>
              <Text style={styles.descricacaoUsuario}>{this.props.idade}</Text>
              <Text style={styles.descricacaoUsuario}>{this.props.peso}</Text>
          </View>
          </View>
        </View>
      );
  }
}
const styles = StyleSheet.create({
  card:{
    alignItems: 'center',
    justifyContent:'center',
    margin: 20,
    backgroundColor:'white',
    borderRadius:6,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
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