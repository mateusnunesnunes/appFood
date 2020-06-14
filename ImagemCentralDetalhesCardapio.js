import React, { Component } from 'react';
import { Platform, StyleSheet, Text, TouchableHighlight, SafeAreaView, View, Image, FlatList, TextInput, TouchableWithoutFeedback, ViewBase,Icon } from 'react-native';
import CelulaDetalhesCardapio from './CelulaDetalhesCardapio';
import Card from './src/components/Card'
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';


export default class DetalhesCardapio extends Component {

  constructor() {
    super();
    this.state = {
      data: [],
      imagem: "",
      titulo: "",
      text: '',
    }
  }
  

  render() {
    return (
      <View style={styles.container}>
        
        <View style={{alignItems: "center", height: "90%", width: "90%", marginTop:40}}>
          <Image style={{ height: "75%", width: "90%", borderRadius: 8 }} source={require("./Imagens/comida.jpg")}></Image>
        </View>
      
          <View style={[styles.card,{height:70,width:'70%',marginTop:-70,flexDirection:'row'}]} >
                  <View style={styles.viewCard}>
                    <Text style={styles.text}>Semana Fitness</Text>
                    <Text style={[styles.text,{fontWeight:'normal',marginTop:10}]}>{this.props.length+" Pratos diversos!"}</Text>
                  </View>
                  <Text style={[styles.border]}></Text>
                  <Text  style={[styles.textRight]} >{this.props.kcal+" Kcal"}</Text>
          </View>
      </View>

    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center'
  },
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
  text:{
    textAlign:'center',
    fontWeight:'bold',
    fontSize:16,
  },
  border:{
    height:'100%',
    borderLeftWidth:2,
    borderLeftColor:'lightgray',
    borderRadius:2
  },
  textRight:{
    width:'30%',
    textAlign:'center',
    fontWeight:'normal',
    fontSize:16,
    alignItems: 'center',
  },
  viewCard:{

    width:'70%',
    height:'100%',
    alignItems: 'center',
    marginTop:15
  }
});
