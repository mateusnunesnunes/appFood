import React, { Component } from 'react';
import { Platform, StyleSheet, Text, SafeAreaView, View, Image, FlatList, TextInput, TouchableOpacity, TouchableWithoutFeedback, ViewBase } from 'react-native';
import SessaoSingleton from './SessaoSingleton';
export default class DetalhesCelula extends Component {

  constructor(props) {
    super(props);
    this.state = {
      quantidadeKcal: "",
      diaDoMes: '',
      mes: "",
      pesoRestante:0,
      pesoMeta:0,
      pesoAtual: 0
    }
  }

  componentDidMount(){
    this.loadUserInfo();
  }

  loadUserInfo(){
    var result = fetch('http://192.168.15.9:4548/users/'+SessaoSingleton.getInstance().getUserID(), {
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
      this.setState({pesoAtual: userInfo[0].peso, pesoMeta: userInfo[0].objetivo})
    })
    .catch(e => { console.log(e);});
  }

  render() {
    let pesoFaltante = 0;
    let textoMeta = "";
    if(this.state.pesoAtual == this.state.pesoMeta){
      textoMeta = "Parabéns! Você atingiu o seu objetivo!";
    }else if(this.state.pesoAtual < this.state.pesoMeta){
      pesoFaltante = this.state.pesoMeta - this.state.pesoAtual;
      pesoFaltante = Math.round(pesoFaltante * 100) / 100;
      textoMeta = this.state.pesoAtual + " Kg, faltam "+pesoFaltante+" Kg para alcançar sua meta ("+this.state.pesoMeta+" Kg)";
    }else{
      pesoFaltante = this.state.pesoAtual - this.state.pesoMeta;
      pesoFaltante = Math.round(pesoFaltante * 100) / 100;
      textoMeta = this.state.pesoAtual + " Kg, faltam "+pesoFaltante+" Kg para alcançar sua meta ("+this.state.pesoMeta+" Kg)";
    }
    
    return (
      <View style={styles.viewCelula}>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          <View style={{ width: "100%", height: 45, backgroundColor: "white" }}>
            <View style={styles.viewColorida}>
              <View style={{ backgroundColor: "#52FFBA", alignItems: "center", flexDirection: 'row', flexWrap: 'wrap' }}>
                <Text style={styles.diaDoMes}>{this.props.diaDoMes}</Text>
                <Text style={styles.mes}>{this.props.mes}</Text>
              </View>
            </View>
          </View>
          <View style={{ width: "100%", height: 50, backgroundColor: "white",flexDirection: 'row', flexWrap: 'wrap' }}>
            <View style={{padding:5}}>
              <Text style={styles.quantidadeKcal}>{textoMeta}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  quantidadeKcal: {
    fontSize: 14,
    color: "black",
    left: 20,
    top:3
  },
  viewCelula: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.5,
    elevation: 2,
    flexGrow: 1,
    width: '90%',
    height: 93,
    top: 10,
    left: 20,
    backgroundColor: 'white',
    position:"absolute"
  },
  diaDoMes: {
    fontSize: 30,
    color: "black",
    paddingLeft: 18
  },
  mes: {
    fontSize: 25,
    color: "black",
    paddingLeft: 15
  },
  viewColorida: {
    padding: 0,
    width: "100%",
    height: "8%",
    backgroundColor: '#52FFBA',
    marginBottom: 20
  }

});
