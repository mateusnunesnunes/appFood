import React, { Component } from 'react';
import { Platform, StyleSheet, Text, SafeAreaView, View, Image, FlatList, TextInput, TouchableWithoutFeedback, ViewBase } from 'react-native';
import ImagemENomeUsuario from "./ImagemENomeUsuario";
import CelulaDetalhesDietaUsuario from "./CelulaDetalhesDietaUsuario";
import CelulaDetalhesMetasUsuario from "./CelulaDetalhesMetasUsuario";
import SegmentedControlTab from 'react-native-segmented-control-tab'
import Grafico from './Grafico';

export default class DetalhesCardapio extends Component {

  constructor() {
    super();
    this.state = {
      data: [],
      imagem: "",
      titulo: "",
      text: '',
      selectedIndex: 1
    }
  }

  handleIndexChange = (index) => {
    this.setState({
      ...this.state,
      selectedIndex: index,
    });
  }

  render() {
    const dataAtual = new Date().getDate();
    const mesNumero = new Date().getMonth();
    const mesNomes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho","Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    const nomeMesAtual = mesNomes[mesNumero];

    return (
      <View style={{ flex: 1 }}>
        <ImagemENomeUsuario></ImagemENomeUsuario>
        <SegmentedControlTab
          tabsContainerStyle={{
            backgroundColor: "#52FFBA", shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            }, shadowOpacity: 0.20, shadowRadius: 1.5, elevation: 2,
          }}
          tabStyle={{ backgroundColor: "white", borderColor: "#52FFBA" }}
          tabTextStyle={{ color: "black", fontSize: 16 }}
          activeTabTextStyle={{ color: "black", fontSize: 16 }}
          activeTabStyle={{ backgroundColor: "#52FFBA" }}
          values={['Sua semana', 'Suas metas']}
          selectedIndex={this.state.selectedIndex}
          onTabPress={this.handleIndexChange}
        />
        {this.state.selectedIndex === 0 ?
          <View style={{ width: "100%",height:"100%", backgroundColor: "white" }}>
            <CelulaDetalhesDietaUsuario
              diaDoMes={dataAtual}
              mes={nomeMesAtual}
              quantidadeKcal="1000"
            ></CelulaDetalhesDietaUsuario>
          </View>
          : <View style={{ width: "100%", height:"100%",backgroundColor: "white" }}>
            <CelulaDetalhesMetasUsuario
              diaDoMes={dataAtual}
              mes={nomeMesAtual}
              pesoAtual={78}
              pesoMeta={73}
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


});
