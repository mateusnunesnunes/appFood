import React, { Component } from 'react';
import { Platform, StyleSheet, Text, SafeAreaView, View, Image, FlatList, TextInput, TouchableOpacity, TouchableWithoutFeedback, ViewBase } from 'react-native';
import SessaoSingleton from './SessaoSingleton';
import Card from './src/components/Card';
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
    var result = fetch('http://192.168.15.5:4548/users/'+SessaoSingleton.getInstance().getUserID(), {
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
      <View style={styles.container}>
        <View style={[styles.container,{flexDirection:'row'}]}>
            <View style={styles.date}>
                  <Text style={styles.dayText}>{this.props.dia}</Text>
                  <Text style={styles.dayStrText}>{this.props.diaStr}</Text>
            </View>
            <Card 
              height={40}
              width={'60%'}
              content={textoMeta}
            ></Card>
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
    flexGrow: 1,
    width: '90%',
    height: 70,
    left: 20,
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
  },
  container:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center'
  },
  date:{
    padding: 5,
    borderRadius:6,
  },
  dayText:{
    fontWeight:'bold',
    fontSize:20
  },
  dayStrText:{
    fontSize:20
  },

});
