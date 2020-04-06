import React, {Component} from 'react';
import {Platform, StyleSheet, Text,TouchableOpacity, SafeAreaView,View,Image,FlatList,TextInput, TouchableWithoutFeedback, ViewBase} from 'react-native';
import { StackNavigator } from 'react-navigation';
import TituloEImagemCardapio from './TituloEImagemCardapio';
import DetalhesCelula from './DetalhesCelula.js';

export default class DetalhesCardapio extends Component{

  constructor(){
    super();
    this.state = {
      data: [
        { id: "00", diaDaSemana: "Segunda-Feira", descricao: "Frango com batatas fritas onduladas e salada", imagemCelula: require("./Imagens/comida.jpg") },
        { id: "01", diaDaSemana: "Terça-Feira",descricao: "Frango com batatas fritas onduladas e salada", imagemCelula: require("./Imagens/comida.jpg") },
        { id: "02", diaDaSemana: "Quarta-Feira",descricao: "Frango com batatas fritas onduladas e salada", imagemCelula: require("./Imagens/comida.jpg") },
        { id: "03", diaDaSemana: "Quinta-Feira",descricao: "Frango com batatas fritas onduladas e salada", imagemCelula: require("./Imagens/comida.jpg") },
        { id: "04", diaDaSemana: "Sexta-Feira",descricao: "Frango com batatas fritas onduladas e salada", imagemCelula: require("./Imagens/comida.jpg") },
      ],
      imagemDoCardapio: require("./Imagens/comida.jpg"),
      titulo:'Titulo',
      text: ''
    }
    
  }

  render() {
    return (
        <SafeAreaView>
          <TituloEImagemCardapio
          titulo = {this.state.titulo}
          imagemDoCardapio = {this.state.imagemDoCardapio}
          ></TituloEImagemCardapio>
          <FlatList
            data={this.state.data}
            keyExtractor={item => item.id}
            style={{top:"90%",paddingBottom:5}}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity style={{flex:1}} onPress={() => this.props.navigation.navigate('Login')} >
                  <View style={{flex:1}}>
                    <DetalhesCelula
                      diaDaSemana = {item.diaDaSemana}
                      descricao = {item.descricao}
                      imagemCelula = {item.imagemCelula}
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

class LoginScreen extends React.Component {
  render() {
   return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <DetalhesDiaCardapio navigation={this.props.navigation} />
    </View>
   );
  }
 }

const RootStack = StackNavigator(
  {

  Login: {
   screen: LoginScreen,
  },

 }
);

const styles = StyleSheet.create({

});
