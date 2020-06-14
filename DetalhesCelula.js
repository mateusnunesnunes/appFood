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
        
        <View style={styles.viewImagemCelula}>
          <Image style={styles.imagem} source={this.props.imagemCelula}></Image>
        </View>

        <View style={{ top: 7 }}>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            <View style={{ width: 180 }}>
              <Text style={styles.titulo}>{this.props.diaDaSemana}</Text>
            </View>
            <Text style={styles.descricaoCaloria}>{this.props.calorias + "kcal"}</Text>
          </View>

          <Text style={styles.descricao}>{this.props.descricao}</Text>

          <View style={{ flexDirection: 'row', flexWrap: 'wrap', top: 8 }}>
            <Text style={{left:3}}>
              <Icon
                name="silverware-variant"
                color="black"
                size={20}
                
              />
            </Text>
            <Text style={styles.descricaoBase}>{this.props.base}</Text>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  imagem: {
    height: '100%',
    width: '100%',
    borderRadius: 6,
    flex: 1,
  },
  descricao: {
    fontSize: 14,
    color: "black",
    left: 5
  },
  descricaoCaloria: {
    fontSize: 14,
    color: "#0FB830",
  },
  descricaoBase: {
    fontSize: 14,
    color: "black",
    left:5
  },
  titulo: {
    fontSize: 14,
    color: "black",
    left: 5,
    fontWeight:'bold'
  },
  viewCelula: {
    alignItems: "center",
    flexGrow: 1,
    width: '95%',
    height: 90,
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
    padding: 5,
  },
  viewImagemCelula: {
    padding: 3,
    backgroundColor: 'white',
    width: '25%',
    height: '100%',
    borderRadius: 7,
  }

});
