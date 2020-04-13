import React, {Component} from 'react';
import {Platform, StyleSheet, Text, SafeAreaView,View,Image,FlatList,TextInput, TouchableOpacity,TouchableWithoutFeedback, ViewBase} from 'react-native';


export default class DetalhesCelula extends Component{

  constructor(props){
    super(props);
    this.state = {
      imagemCelula: "",
      diaDaSemana:"",
      descricao:'',
      titulo:'titulo',
      text: ''
    }
  }
  

  render() {
    return (
      
        <View style={styles.viewCelula}>
          <View style={styles.viewImagemCelula}>
            <Image style={styles.imagem} source={this.props.imagemCelula}></Image>
          </View>
          
          <View style={{flex:1,width:"75%"}}>
            <Text style={styles.titulo}>{this.props.diaDaSemana}</Text>
            <Text style={styles.descricao}>{this.props.descricao}</Text>
          </View>
        </View>
      );
  }
}
const styles = StyleSheet.create({
  
  imagem:{
    height: '100%', 
    width:'100%',
    borderRadius:6,
    flex: 1,
  },
  titulo:{
    fontWeight: 'bold',
    fontSize: 16,
    color: "black",
    marginLeft: 5
  },
  descricao:{
    fontWeight: 'bold',
    fontSize: 12,
    color: "black",
    marginLeft: 5,
  },
  viewCelula:{
    alignItems: "center",
    flexGrow: 1,
    width: '87%',
    height: '50%', 
    marginLeft: 26,
    backgroundColor: '#52FFBA', 

    borderRadius:7,
    flexDirection: 'row', 
    flexWrap: 'wrap',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  viewImagemCelula:{
    backgroundColor:'white',
    width:'20%',
    height:'100%',
    borderRadius:7,
  }
  
});
