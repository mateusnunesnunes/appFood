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
        { id: "00", diaDaSemana: "Segunda-Feira", descricao: "Dieta baseada em frango", imagemCelula: require("./Imagens/comida.jpg"), calorias: 2000, base: "Frango" },
        { id: "01", diaDaSemana: "Terça-Feira", descricao: "Dieta baseada em carne", imagemCelula: require("./Imagens/comida.jpg"), calorias: 2000, base: "Carne" },
        { id: "02", diaDaSemana: "Quarta-Feira", descricao: "Dieta baseada em peixe", imagemCelula: require("./Imagens/comida.jpg"), calorias: 2000, base: "Peixe" },
        { id: "03", diaDaSemana: "Quinta-Feira", descricao: "Dieta baseada em frango", imagemCelula: require("./Imagens/comida.jpg"), calorias: 2000, base: "Frango" },
        { id: "04", diaDaSemana: "Sexta-Feira", descricao: "Dieta baseada em carne", imagemCelula: require("./Imagens/comida.jpg"), calorias: 2000, base: "Carne" }
      ],
      imagemDoCardapio: require("./Imagens/comida.jpg"),
      titulo: 'Titulo',
      text: '',
      totalCalorias: "2500"
    }
  }
  /*
        
      


        
  */

  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView style={{ backgroundColor: "white", height: "98%" }}>


        <ImagemCentralDetalhesCardapio>
        </ImagemCentralDetalhesCardapio>


        <View style={{ flexDirection: 'row', flexWrap: 'wrap', top: "2%", left: 15 }}>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', top: "2%" }}>
            <Text style={{ fontSize: 16 }}>Total de </Text>
            <Text style={{ fontSize: 16 }}>{this.state.totalCalorias}</Text>
            <Text style={{ fontSize: 16 }}> kcal</Text>
            <TouchableOpacity style={{ flexDirection: 'row', flexWrap: 'wrap'}} onPress={() => navigation.navigate("SearchFood")} >
              <Text style={{ fontSize: 16, color: '#52FFBA', left: 80 }}>adicionar mais</Text>
              <Icon
                  name='add-circle'
                  size={20}
                  color='#52FFBA'
                  style={{ left:80,height: 25, width: 25 }} />
            </TouchableOpacity>

          </View>
        </View>

        <FlatList
          data={this.state.data}
          keyExtractor={item => item.id}
          style={{ top: "2%", paddingBottom: 5, backgroundColor: "white", height: "30%" }}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity style={{ flex: 1, backgroundColor: "white" }} onPress={() => navigation.navigate("DetalhesDiaDoCardapio")} >
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

