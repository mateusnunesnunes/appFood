import React, { Component } from 'react';
import { Platform, StyleSheet, Text, SafeAreaView, View, Image, FlatList, TextInput, TouchableOpacity, TouchableWithoutFeedback, ViewBase } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class DetalhesCelula extends Component {

  constructor(props) {
    super(props);
    this.state = {
      imagemCelula: "",
      diaDaSemana: "",
      descricao: '',
      titulo: 'titulo',
      text: ''
    }
  }


  render() {
    return (
      <View style={styles.viewCelula}>
        <View style={{ top: 7,width:"70%" }}>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            <View style={{ width: 180 }}>
              <Text style={styles.titulo}>{this.props.titulo}</Text>
            </View>         
          </View>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', top: 15 }}>
            <Text style={{left:10}}>
              <Icon
                name="silverware-variant"
                color="black"
                size={18}
              />
            </Text>
            <Text style={styles.descricaoBase}>{this.props.base}</Text>
          </View>
        </View>
        <View style={styles.viewColorida}>
          <View style={{backgroundColor:"#52FFBA",height:"100%",width:"100%",alignItems: "center",padding:10,paddingLeft:18,flexDirection: 'column',flexWrap: 'wrap',borderRadius: 7,}}>
            <Text style={styles.descricaoQuantidadeKcal}>{this.props.caloriasTotais}</Text>
            <Text style={styles.descricaoKcal}>kcal</Text>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  descricaoBase: {
    fontSize: 12,
    color: "black",
    left:10
  },
  descricaoQuantidadeKcal: {
    fontSize: 14,
    color: "black",
    top:5
  },
  descricaoKcal: {
    fontSize: 14,
    color: "black",
    top:7
  },
  titulo: {
    fontSize: 14,
    color: "black",
    left: 10,
  },
  viewCelula: {
    alignItems: "center",
    flexGrow: 1,
    width: '75%',
    height: "20%",
    top:"70%",
    left:45,
    backgroundColor: 'white',
    borderRadius: 7,
    flexDirection: 'column',
    flexWrap: 'wrap',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.5,
    elevation: 2,
    padding: 0,
    position:"absolute"
  },
  viewColorida: {
    padding: 0,
    backgroundColor: 'white',
    width: '30%',
    height: '100%',
    borderRadius: 7,
  }

});
