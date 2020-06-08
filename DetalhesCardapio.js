import React, { Component } from 'react';
import { Text, TouchableOpacity, SafeAreaView, View, Image, FlatList, TextInput, TouchableWithoutFeedback, ViewBase } from 'react-native';
import DetalhesCelula from './DetalhesCelula.js';
import ImagemCentralDetalhesCardapio from "./ImagemCentralDetalhesCardapio";
import Icon from 'react-native-vector-icons/MaterialIcons';


export default class DetalhesCardapio extends Component {

  constructor() {
    super();
    this.state = {
      data: [
        { id: "00", diaDaSemana: "Segunda-Feira", descricao: "Dieta baseada em frango", imagemCelula: require("./Imagens/garfoEColher.jpg"), calorias: 2000, base: "Frango" },
        { id: "01", diaDaSemana: "Terça-Feira", descricao: "Dieta baseada em carne", imagemCelula: require("./Imagens/garfoEColher.jpg"), calorias: 2000, base: "Carne" },
        { id: "02", diaDaSemana: "Quarta-Feira", descricao: "Dieta baseada em peixe", imagemCelula: require("./Imagens/garfoEColher.jpg"), calorias: 2000, base: "Peixe" },
        { id: "03", diaDaSemana: "Quinta-Feira", descricao: "Dieta baseada em frango", imagemCelula: require("./Imagens/garfoEColher.jpg"), calorias: 2000, base: "Frango" },
        { id: "04", diaDaSemana: "Sexta-Feira", descricao: "Dieta baseada em carne", imagemCelula: require("./Imagens/garfoEColher.jpg"), calorias: 2000, base: "Carne" }
      ],
      imagemDoCardapio: require("./Imagens/comida.jpg"),
      titulo: 'Titulo',
      text: '',
      totalCalorias: "2500"
    }
  }

  pegarComidaDaSemana(){
    var result = fetch('localhost:4548/listaComidasCardapio', {
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
      let array = response.data.comidas;
      console.log(array);
    })
    .catch(e => { console.log(e);});
  }

  render() {
    const { navigation } = this.props;
    this.pegarComidaDaSemana();
    return (
      <SafeAreaView style={{ backgroundColor: "white", height: "98%" }}>


        <ImagemCentralDetalhesCardapio>
        </ImagemCentralDetalhesCardapio>


        <View style={{ flexDirection: 'row', flexWrap: 'wrap', top: "2%", left: 15 }}>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', top: "2%" }}>
            <TouchableOpacity style={{ flexDirection: 'row', flexWrap: 'wrap' }} onPress={() => navigation.navigate("Perfil")} >
              <Icon
                name='account-circle'
                size={20}
                color='#52FFBA'
                style={{ height: 25, width: 25 }} />
              <Text style={{ fontSize: 16, color: '#52FFBA' }}>Seu perfil</Text>
            </TouchableOpacity>
            <View style={{ position: "absolute", left: "230%" }}>
              <TouchableOpacity style={{ flexDirection: 'row', flexWrap: 'wrap' }} onPress={() => navigation.navigate("SearchFood")} >
                <Text style={{ fontSize: 16, color: '#52FFBA' }}>Adicionar mais</Text>
                <Icon
                  name='add-circle'
                  size={20}
                  color='#52FFBA'
                  style={{ height: 25, width: 25 }} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{ flexDirection: 'row', flexWrap: 'wrap', top: "3%", left: "23%", alignItems: "center" }}>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', top: "2%" }}>
            <Text style={{ fontSize: 16 }}>Total de </Text>
            <Text style={{ fontSize: 16 }}>{this.state.totalCalorias}</Text>
            <Text style={{ fontSize: 16 }}> kcal</Text>
          </View>
        </View>

        <FlatList
          data={this.state.data}
          keyExtractor={item => item.id}
          style={{ top: "2%", paddingBottom: 5, backgroundColor: "white", height: "30%" }}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity style={{ flex: 1, backgroundColor: "white" }} onPress={() => navigation.navigate("DetalhesDiaDoCardapio", { titulo: item.diaDaSemana,caloriasCardapio: item.calorias})} >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingBottom: 5, backgroundColor: "white", paddingTop: 5 }}>
                  <DetalhesCelula
                    diaDaSemana={item.diaDaSemana}
                    descricao={item.descricao}
                    imagemCelula={item.imagemCelula}
                    calorias={item.calorias}
                    base={item.base}
                  >
                  </DetalhesCelula>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </SafeAreaView>
    );
  }
}

