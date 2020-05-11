import React, { Component } from 'react';
import { Platform, StyleSheet, Text, SafeAreaView, View, Image, FlatList, TextInput, TouchableOpacity, TouchableWithoutFeedback, ViewBase } from 'react-native';

export default class DetalhesCelula extends Component {

  constructor(props) {
    super(props);
    this.state = {
      quantidadeKcal: "",
      diaDoMes: '',
      mes: "",
      pesoRestante:0,
      pesoMeta:0,
      
    }
  }

  render() {
    const pesoFaltante = this.props.pesoAtual-this.props.pesoMeta
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
              <Text style={styles.quantidadeKcal}>{this.props.pesoAtual + " Kg, faltam "+pesoFaltante+" Kg para alcançar sua meta"}</Text>
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
