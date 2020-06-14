import React, { Component } from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, SafeAreaView, View, Image, FlatList, TextInput, TouchableWithoutFeedback, ViewBase, PanResponder } from 'react-native';
import TituloEImagemCardapio from './TituloEImagemCardapio';
import DetalhesCelula from './DetalhesCelula.js';
import { LinearGradient } from 'expo-linear-gradient';
import ImagemCentralDetalhesCardapio from "./ImagemCentralDetalhesCardapio";
import { parse } from 'react-native-svg';

export default class DetalhesDiaDoCardapio extends Component {

  constructor() {
    super();
    this.state = {
      data: [
      { id: "0", periodo: "Manhã", descricao: "Começe seu dia bem!", imagemCelula: require("./src/Imagens/garfoEColher.jpg"),base:"Café da manhã & Almoço"},
        { id: "1", periodo: "Tarde", descricao: "Lanche da tarde saudável", imagemCelula: require("./src/Imagens/garfoEColher.jpg"),base:"Lanche da Tarde"},
        { id: "2", periodo: "Noite", descricao: "Tenha uma boa noite!", imagemCelula: require("./src/Imagens/garfoEColher.jpg"),base:"Janta"}
      ],
    }

  }

  returnKcal(item,foodArray){
    let inicio = 0
    let fim = 5
    switch (parseInt(item.id)) {
      case 0:
         inicio = 0
         fim = 2
        break;
      case 1:
          inicio = 3
          fim = 3
        break;
      default:
          inicio = 4
          fim = 5
        break;
    }
    let kcal = 0 
    foodArray.forEach(element => {
      let index = foodArray.indexOf(element)
      if(index >= inicio && index <= fim){
        let descricao = element.descricao;
        let arraySplitado = descricao.split(' ');
        kcal += parseInt(arraySplitado[arraySplitado.length - 2])
        
      }
    });
    return kcal
  }


  navigatorSend(item,foodArray){
    let inicio = 0
    let fim = 5
    switch (parseInt(item.id)) {
      case 0:
         inicio = 0
         fim = 2
        break;
      case 1:
          inicio = 3
          fim = 3
        break;
      default:
          inicio = 4
          fim = 5
        break;
    }
    let returnFood = []
    foodArray.forEach(element => {
      let index = foodArray.indexOf(element)
      if(index >= inicio && index <= fim){
        returnFood.push(element)
      }
    });
    this.props.navigation.navigate("DetalhesRefeicao",{titulo:item.periodo,foods:returnFood})
  }





  render() {
    const { navigation } = this.props;
    const titulo = this.props.route.params.titulo
    console.log("Dia vindo = "+titulo)
    let comidas = []
    comidas = this.props.route.params.comidas
    
    console.log("comidas vindo = ")

    return (

      <SafeAreaView style={{ backgroundColor: "white", height: "98%", }}>



          <LinearGradient
          colors={['#52FFBA', 'transparent']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: 600,
          }}
        />

        <View style={{height:'50%'}}>
          <ImagemCentralDetalhesCardapio
            title={titulo}
            length={comidas.length}
            kcal={'1.712'}
          >
          </ImagemCentralDetalhesCardapio>
        </View>
        <View style={{height:'40%'}}>
          <FlatList
            data={this.state.data}
            keyExtractor={item => item.id}
            style={{ top: "5%", paddingBottom: 5,backgroundColor:"transparent",height:"60%" }}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity style={{ flex: 1,backgroundColor:"transparent" }} onPress={() => this.navigatorSend(item,comidas)}  >
                  <View style={{ flex: 1, justifyContent: 'center',alignItems: 'center',paddingBottom: 5,backgroundColor:"transparent",paddingTop:5  }}>
                    <DetalhesCelula
                      diaDaSemana={item.periodo}
                      descricao={item.descricao}
                      imagemCelula={item.imagemCelula}
                      calorias={this.returnKcal(item,comidas)}
                      base={(item.base)}
                    >
                    </DetalhesCelula>
                  </View>
                </TouchableOpacity>
              );
            }}
          /> 
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center'
  },
});
