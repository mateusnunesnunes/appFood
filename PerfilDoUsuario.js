import React, { Component } from 'react';
import { Platform, StyleSheet, Text, SafeAreaView, View, Image, FlatList, TextInput, TouchableWithoutFeedback, ViewBase } from 'react-native';
import ImagemENomeUsuario from "./ImagemENomeUsuario";
import CelulaDetalhesDietaUsuario from "./CelulaDetalhesDietaUsuario";
import CelulaDetalhesMetasUsuario from "./CelulaDetalhesMetasUsuario";
import SegmentedControlTab from 'react-native-segmented-control-tab';
import SemanaPerfilUsuario from './SemanaPerfilUsuario';
import SessaoSingleton from './SessaoSingleton';
import Grafico from './Grafico';


export default class DetalhesCardapio extends Component {

  constructor() {
    super();
    this.state = {
      data: [],
      imagem: "",
      titulo: "",
      text: '',
      nome:'',
      idade:'',
      peso:'',
      selectedIndex: 0
    }
  }

  handleIndexChange = (index) => {
    this.setState({
      ...this.state,
      selectedIndex: index,
    });
  }

  componentDidMount(){
    this.loadUserInfo();
  }

  loadUserInfo = () =>{
    var result =  fetch('http://192.168.100.4:4548/users/1', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => 
      response.json().then(data => ({
        data: data,
        status: response.status
    }))
    ).then(response => {
      let userInfo = response.data;

      let idade =  2020 -  parseInt(String(userInfo[0].dataNascimento).split(':')[0].substr(0,4));
      this.setState({
        nome:userInfo[0].nome,
        idade:idade,
        peso:userInfo[0].peso
      })
    })
    .catch(e => { console.error(e);});
  }



  render() {
    let dataAtual = String(new Date().getDate());
    

    const mesNomes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho","Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    const diaNome =  ["Dom","Seg","Ter","Qua","Qui","Sex","Sab"]

    const dia = diaNome[parseInt(new Date().getDay())];
    if(dataAtual.length == 1){
      dataAtual = '0'+dataAtual
    }

    return (
      <View style={{ flex: 1 }}>
        <ImagemENomeUsuario 
          nome={this.state.nome}
          idade={this.state.idade+' Anos '}
          peso={this.state.peso+' Kg'}
        ></ImagemENomeUsuario>

        <View style={styles.container}>
          <SegmentedControlTab
            tabsContainerStyle={{
              backgroundColor: "transparent",
              shadowColor: "#000", 
              height:40,
              width:'70%',
              marginTop:-20,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 0.32,
              shadowRadius: 5.46,
              elevation: 9,
            }}
            tabStyle={{ backgoundColor: "transparent", borderColor: "#0FB830" }}
            tabTextStyle={{ color: "black", fontSize: 14 ,fontWeight:'normal'}}
            activeTabTextStyle={{ color: "black", fontSize: 16 ,fontWeight:'bold'}}
            activeTabStyle={{ backgroundColor: "#52FFBA" }}
            values={['Sua semana', 'Suas metas']}
            selectedIndex={this.state.selectedIndex}
            onTabPress={this.handleIndexChange}
          />
        </View>
        
        {this.state.selectedIndex === 0 ?
          <View >
            <CelulaDetalhesDietaUsuario
              dia={dataAtual}
              diaStr={dia}
            ></CelulaDetalhesDietaUsuario>
          </View>
          : <View style={{ width: "100%", height:"100%",backgroundColor: "white" }}>
            <CelulaDetalhesMetasUsuario
              
            >
            
            </CelulaDetalhesMetasUsuario>
            
            <View style={{width: "90%", position:"absolute", top:120, left:20}}>
            <Grafico/>
            </View>
          </View>}
          
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    justifyContent:'center',
    alignItems: 'center'
  }

});
