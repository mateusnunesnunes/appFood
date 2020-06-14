import React, { Component } from 'react';
import { Platform, StyleSheet, Text,Dimensions ,SafeAreaView, View, Image, FlatList, TextInput, TouchableWithoutFeedback, ViewBase } from 'react-native';
import TituloEImagemCardapio from './TituloEImagemCardapio';
import { LinearGradient } from 'expo-linear-gradient';
import Card from './src/components/Card';
import DetalhesCelula from './DetalhesCelula.js';

export default class DetalhesRefeicao extends Component {

  constructor() {
    super();

    this.state = {
      imagemDoCardapio: require("./src/Imagens/comida3.png"),
      titulo: '',
      text: '',
      quantidadeCaloria: ""
    }
  }


  render() {
    const titulo = this.props.route.params.titulo
    const foods = this.props.route.params.foods
    console.log('dados vindos = '+titulo+"  "+foods)


    return (
      <SafeAreaView style={{ backgroundColor: "white", height: "98%"}}>
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
        
        <View style={[styles.card,{height:50,width:'90%',}]} >
                <Text style={styles.text}>{titulo}</Text>
        </View>

        <FlatList
            data={foods}
            keyExtractor={item => item.id}
            style={{ top: "5%", paddingBottom: 5,backgroundColor:"transparent",height:"60%" }}
            renderItem={({ item }) => {
              return (
               
                  <View style={{ flex: 1, justifyContent: 'center',alignItems: 'center',paddingBottom: 5,backgroundColor:"transparent",paddingTop:5  }}>
                    <View style={[styles.card,{width:'90%', padding: 20,}]} >
                            <Text style={styles.textNome}>{item.nome}</Text>
                            <Text style={styles.textDescricao}>{item.descricao}</Text>
                            <Text style={[styles.textMacro,{backgroundColor:"#326c37"}]}>{'Proteinas: '+item.proteinas}</Text>
                            <Text style={[styles.textMacro,{backgroundColor:"#4e8f52"}]}>{'Carboidratos: '+item.carboidratos}</Text>
                            <Text style={[styles.textMacro,{backgroundColor:"#70a574"}]}>{'Gorduras: '+item.gorduras}</Text>
                    </View>
                  </View>
                
              );
            }}
          />
        
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  textMacro:{
    padding: 5,
    margin:5,
    
    borderColor:'black',
    borderRadius:5,
    
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  textGorduras:{

  },
  textProteina:{

  },
  textCarboidrato:{

  },
  textDescricao:{
    fontWeight:'normal',
    fontSize:15,
    margin:7,
    marginBottom:30
  },
  textNome:{
    fontWeight:'bold',
    fontSize:20,
    margin:7,
    marginBottom:30
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
    padding:5,
    margin:5,
    fontWeight:'bold',
    fontSize:20,
    
    alignItems: 'center',
    
  }
});